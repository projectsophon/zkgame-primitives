/**
 * This package contains serializers and deserializers for converting between
 * various representations of Dark Forest data, for example between raw data
 * received from blockchain calls to Dark Forest contracts and the typescript
 * types used across the client.
 *
 * ## Installation
 *
 * You can install this package using [`npm`](https://www.npmjs.com) or
 * [`yarn`](https://classic.yarnpkg.com/lang/en/) by running:
 *
 * ```bash
 * npm install --save @projectsophon/serde
 * ```
 * ```bash
 * yarn add @projectsophon/serde
 * ```
 *
 * When using this in a plugin, you might want to load it with [skypack](https://www.skypack.dev)
 *
 * ```js
 * import * as serde from 'http://cdn.skypack.dev/@projectsophon/serde'
 * ```
 *
 * @packageDocumentation
 */

export * from "./address";
export * from "./event";
export * from "./location";
export * from "./transactions";
