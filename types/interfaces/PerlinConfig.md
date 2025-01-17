# Interface: PerlinConfig

Various configuration used for calculating perlin.
Always make sure these values match the contracts you are working with
or else your transactions **will** be reverted.

## Table of contents

### Properties

- [floor](PerlinConfig.md#floor)
- [key](PerlinConfig.md#key)
- [mirrorX](PerlinConfig.md#mirrorx)
- [mirrorY](PerlinConfig.md#mirrory)
- [scale](PerlinConfig.md#scale)

## Properties

### floor

• **floor**: `boolean`

If the resulting perlin should be "floored".

**`Default`**

false

___

### key

• **key**: `number`

The key being used for the perlin calculation. Will be `SPACETYPE_KEY` or `BIOMEBASE_KEY`.

___

### mirrorX

• **mirrorX**: `boolean`

Whether the X coordinate is being mirrored in the perlin calculation.

**`Default`**

false

___

### mirrorY

• **mirrorY**: `boolean`

Whether the Y coordinate is being mirrored in the perlin calculation.

**`Default`**

false

___

### scale

• **scale**: `number`

The `PERLIN_LENGTH_SCALE` being used to calculate perlin.
