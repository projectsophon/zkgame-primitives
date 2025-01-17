# @projectsophon/whitelist

This package contains utilities for working with DarkForest whitelist keys.

## Installation

You can install this package using [`npm`](https://www.npmjs.com) or
[`yarn`](https://classic.yarnpkg.com/lang/en/) by running:

```bash
npm install --save @projectsophon/whitelist
```
```bash
yarn add @projectsophon/whitelist
```

When using this in a plugin, you might want to load it with [skypack](https://www.skypack.dev)

```js
import * as whitelist from 'http://cdn.skypack.dev/@projectsophon/whitelist'
```

## Table of contents

### Variables

- [keysPerTx](README.md#keyspertx)

### Functions

- [bigIntFromKey](README.md#bigintfromkey)
- [generateKey](README.md#generatekey)
- [generateKeys](README.md#generatekeys)
- [keyHash](README.md#keyhash)

## Variables

### keysPerTx

• `Const` **keysPerTx**: ``400``

## Functions

### bigIntFromKey

▸ **bigIntFromKey**(`key`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`bigint`

___

### generateKey

▸ **generateKey**(): `string`

#### Returns

`string`

___

### generateKeys

▸ **generateKeys**(`count`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

`string`[]

___

### keyHash

▸ **keyHash**(`key`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`string`
