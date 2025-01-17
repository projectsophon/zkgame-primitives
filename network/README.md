# @projectsophon/network

This package contains functions and classes useful for communicating with the blockchain.

## Installation

You can install this package using [`npm`](https://www.npmjs.com) or
[`yarn`](https://classic.yarnpkg.com/lang/en/) by running:

```bash
npm install --save @projectsophon/network
```
```bash
yarn add @projectsophon/network
```

When using this in a plugin, you might want to load it with [skypack](https://www.skypack.dev)

```js
import * as network from 'http://cdn.skypack.dev/@projectsophon/network'
```

## Table of contents

### Classes

- [ConnectionManager](classes/ConnectionManager.md)
- [ContractCaller](classes/ContractCaller.md)
- [ContractManager](classes/ContractManager.md)
- [ThrottledConcurrentQueue](classes/ThrottledConcurrentQueue.md)
- [TxCollection](classes/TxCollection.md)
- [TxExecutor](classes/TxExecutor.md)

### Interfaces

- [ConcurrentQueueConfiguration](interfaces/ConcurrentQueueConfiguration.md)
- [Queue](interfaces/Queue.md)

### Type Aliases

- [AfterTransaction](README.md#aftertransaction)
- [BeforeQueued](README.md#beforequeued)
- [BeforeTransaction](README.md#beforetransaction)
- [ContractLoader](README.md#contractloader)
- [GasPriceSettingProvider](README.md#gaspricesettingprovider)
- [RetryErrorHandler](README.md#retryerrorhandler)

### Functions

- [aggregateBulkGetter](README.md#aggregatebulkgetter)
- [assertProperlySigned](README.md#assertproperlysigned)
- [callWithRetry](README.md#callwithretry)
- [createContract](README.md#createcontract)
- [ethToWei](README.md#ethtowei)
- [getAutoGasPrices](README.md#getautogasprices)
- [getGasSettingGwei](README.md#getgassettinggwei)
- [gweiToWei](README.md#gweitowei)
- [isPurchase](README.md#ispurchase)
- [neverResolves](README.md#neverresolves)
- [verifySignature](README.md#verifysignature)
- [waitForTransaction](README.md#waitfortransaction)
- [weiToEth](README.md#weitoeth)
- [weiToGwei](README.md#weitogwei)

## Type Aliases

### AfterTransaction

Ƭ **AfterTransaction**: (`transactionRequest`: `Transaction`, `performanceMetrics`: `unknown`) => `Promise`<`void`\>

#### Type declaration

▸ (`transactionRequest`, `performanceMetrics`): `Promise`<`void`\>

[TxExecutor](classes/TxExecutor.md) calls this after executing a transaction.

##### Parameters

| Name | Type |
| :------ | :------ |
| `transactionRequest` | `Transaction` |
| `performanceMetrics` | `unknown` |

##### Returns

`Promise`<`void`\>

___

### BeforeQueued

Ƭ **BeforeQueued**: (`id`: `TransactionId`, `intent`: `TxIntent`, `overrides?`: `providers.TransactionRequest`) => `Promise`<`void`\>

#### Type declaration

▸ (`id`, `intent`, `overrides?`): `Promise`<`void`\>

[TxExecutor](classes/TxExecutor.md) calls this before queueing a function to determine whether or not that
function should be queued. If this function rejects, a transaction is not queued.

##### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `TransactionId` |
| `intent` | `TxIntent` |
| `overrides?` | `providers.TransactionRequest` |

##### Returns

`Promise`<`void`\>

___

### BeforeTransaction

Ƭ **BeforeTransaction**: (`transactionRequest`: `Transaction`) => `Promise`<`void`\>

#### Type declaration

▸ (`transactionRequest`): `Promise`<`void`\>

[TxExecutor](classes/TxExecutor.md) calls this before executing a function to determine whether or not that
function should execute. If this function rejects, the transaction is cancelled.

##### Parameters

| Name | Type |
| :------ | :------ |
| `transactionRequest` | `Transaction` |

##### Returns

`Promise`<`void`\>

___

### ContractLoader

Ƭ **ContractLoader**<`C`\>: (`address`: `string`, `provider`: `providers.JsonRpcProvider`, `signer`: `Wallet` \| `undefined`) => `Promise`<`C`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends `BaseContract` |

#### Type declaration

▸ (`address`, `provider`, `signer`): `Promise`<`C`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `provider` | `providers.JsonRpcProvider` |
| `signer` | `Wallet` \| `undefined` |

##### Returns

`Promise`<`C`\>

___

### GasPriceSettingProvider

Ƭ **GasPriceSettingProvider**: (`transactionRequest`: `Transaction`) => `AutoGasSetting` \| `string`

#### Type declaration

▸ (`transactionRequest`): `AutoGasSetting` \| `string`

Returns either a string that represents the gas price we should use by default for transactions,
or a string that represents the fact that we should be using one of the automatic gas prices.

##### Parameters

| Name | Type |
| :------ | :------ |
| `transactionRequest` | `Transaction` |

##### Returns

`AutoGasSetting` \| `string`

___

### RetryErrorHandler

Ƭ **RetryErrorHandler**: (`i`: `number`, `e`: `Error`) => `void`

#### Type declaration

▸ (`i`, `e`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `i` | `number` |
| `e` | `Error` |

##### Returns

`void`

## Functions

### aggregateBulkGetter

▸ **aggregateBulkGetter**<`T`\>(`total`, `querySize`, `getterFn`, `onProgress?`, `offset?`): `Promise`<`T`[]\>

A useful utility function that breaks up the proverbial number line (defined by {@code total} and
{@code querySize}), and calls {@code getterFn} for each of the sections on the number line.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `total` | `number` | `undefined` | the total amount of of items to get |
| `querySize` | `number` | `undefined` | the chunk size |
| `getterFn` | (`startIdx`: `number`, `endIdx`: `number`) => `Promise`<`T`[]\> | `undefined` | a function that fetches something, given a start index and end index |
| `onProgress?` | (`fractionCompleted`: `number`) => `void` | `undefined` | whenever a chunk is loaded, this function is called with the fraction of individual items that have been loaded so far. |
| `offset` | `number` | `0` | the index to start fetching, can be used to skip previously fetched elements. |

#### Returns

`Promise`<`T`[]\>

a list of each of the individual items that were loaded.

___

### assertProperlySigned

▸ **assertProperlySigned**(`message`): `void`

Ensures that the given message was properly signed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `SignedMessage`<`unknown`\> |

#### Returns

`void`

___

### callWithRetry

▸ **callWithRetry**<`T`\>(`fn`, `args?`, `onError?`, `maxRetries?`, `retryInterval?`): `Promise`<`T`\>

Calls the given function, retrying it if there is an error.

**`Todo`**

Get rid of this, and make use of [ContractCaller](classes/ContractCaller.md).

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `fn` | (...`args`: `any`[]) => `Promise`<`T`\> | `undefined` |
| `args` | `any`[] | `[]` |
| `onError?` | [`RetryErrorHandler`](README.md#retryerrorhandler) | `undefined` |
| `maxRetries` | ``12`` | `DEFAULT_MAX_CALL_RETRIES` |
| `retryInterval` | `number` | `1000` |

#### Returns

`Promise`<`T`\>

___

### createContract

▸ **createContract**<`C`\>(`contractAddress`, `contractABI`, `provider`, `signer?`): `C`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends `Contract`<`C`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `contractAddress` | `string` | the address of the contract you want to connect to |
| `contractABI` | `ContractInterface` | a javacript object representing the ABI |
| `provider` | `JsonRpcProvider` | - |
| `signer?` | `Wallet` | - |

#### Returns

`C`

___

### ethToWei

▸ **ethToWei**(`eth`): `BigNumber`

Returns the given amount of eth in wei as a big integer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eth` | `number` |

#### Returns

`BigNumber`

___

### getAutoGasPrices

▸ **getAutoGasPrices**(): `Promise`<`GasPrices`\>

Gets the current gas prices from xDai's price oracle. If the oracle is broken, return some sane
defaults.

#### Returns

`Promise`<`GasPrices`\>

___

### getGasSettingGwei

▸ **getGasSettingGwei**(`setting`, `gasPrices`): `number` \| `undefined`

Given the user's auto gas setting, and the current set of gas prices on the network, returns the
preferred gas price. If an invalid AutoGasSetting is provided, then returns undefined.

#### Parameters

| Name | Type |
| :------ | :------ |
| `setting` | `AutoGasSetting` |
| `gasPrices` | `GasPrices` |

#### Returns

`number` \| `undefined`

___

### gweiToWei

▸ **gweiToWei**(`gwei`): `BigNumber`

Returns the given amount of gwei in wei as a big integer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `gwei` | `number` |

#### Returns

`BigNumber`

___

### isPurchase

▸ **isPurchase**(`tx?`): `boolean`

Whether or not some value is being transferred in this transaction.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx?` | `TransactionRequest` |

#### Returns

`boolean`

___

### neverResolves

▸ **neverResolves**(): `Promise`<`void`\>

A function that just never resolves.s

#### Returns

`Promise`<`void`\>

___

### verifySignature

▸ **verifySignature**(`message`, `signature`, `addr`): `boolean`

Returns whether or not the given message was signed by the given address.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `signature` | `string` |
| `addr` | `undefined` \| `EthAddress` |

#### Returns

`boolean`

___

### waitForTransaction

▸ **waitForTransaction**(`provider`, `txHash`): `Promise`<`providers.TransactionReceipt`\>

Given a transaction hash and a JsonRpcProvider, waits for the given transaction to complete.

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | `JsonRpcProvider` |
| `txHash` | `string` |

#### Returns

`Promise`<`providers.TransactionReceipt`\>

___

### weiToEth

▸ **weiToEth**(`wei`): `number`

Returns the given amount of wei in gwei as a number.

#### Parameters

| Name | Type |
| :------ | :------ |
| `wei` | `BigNumber` |

#### Returns

`number`

___

### weiToGwei

▸ **weiToGwei**(`wei`): `number`

Returns the given amount of wei in gwei as a number.

#### Parameters

| Name | Type |
| :------ | :------ |
| `wei` | `BigNumber` |

#### Returns

`number`
