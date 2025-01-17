# Interface: RuinsRendererType

## Table of contents

### Properties

- [rendererType](RuinsRendererType.md#renderertype)

### Methods

- [flush](RuinsRendererType.md#flush)
- [queueRuins](RuinsRendererType.md#queueruins)

## Properties

### rendererType

• **rendererType**: [`RendererType`](../README.md#renderertype-1)

## Methods

### flush

▸ **flush**(): `void`

Draws all queued Foundries.

#### Returns

`void`

___

### queueRuins

▸ **queueRuins**(`planet`, `centerW`, `radiusW`): `void`

The game calls the queue function when the entities should be put into a back buffer queue.
The back buffer is used to contain information on the entities being drawn for later use in the flush function.
The implementing renderer should contains its own back buffer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `planet` | [`Planet`](../README.md#planet) | an object that contains info about the current Ruins/Foundery planet |
| `centerW` | [`WorldCoords`](../README.md#worldcoords) | represents the coordinates of the current Foundries relative to the game world. |
| `radiusW` | `number` | represents the radius of the Foundries relative to the size of the game world |

#### Returns

`void`
