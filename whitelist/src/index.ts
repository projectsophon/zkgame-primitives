/**
 * This package contains utilities for working with DarkForest whitelist keys.
 *
 * ## Installation
 *
 * You can install this package using [`npm`](https://www.npmjs.com) or
 * [`yarn`](https://classic.yarnpkg.com/lang/en/) by running:
 *
 * ```bash
 * npm install --save @projectsophon/whitelist
 * ```
 * ```bash
 * yarn add @projectsophon/whitelist
 * ```
 *
 * When using this in a plugin, you might want to load it with [skypack](https://www.skypack.dev)
 *
 * ```js
 * import * as whitelist from 'http://cdn.skypack.dev/@projectsophon/whitelist'
 * ```
 *
 * @packageDocumentation
 */

import { mimcSponge } from "@projectsophon/hashing";
import { ethers } from "ethers";
import { chunk, padStart, replace } from "lodash";

export const keysPerTx = 400;

export const generateKey = () => {
  const hexArray = padStart(
    BigInt(ethers.BigNumber.from(ethers.utils.randomBytes(12)).toString()).toString(16),
    24,
    "0"
  ).split("");

  return chunk(hexArray, 6)
    .map((s) => s.join(""))
    .join("-")
    .toUpperCase();
};

export const generateKeys = (count: number) => {
  const keys = [] as string[];
  for (let i = 0; i < count; i++) {
    keys.push(generateKey());
  }

  return keys;
};

export const bigIntFromKey = (key: string) => BigInt(`0x${replace(key, /-/g, "")}`);

export const keyHash = (key: string) => mimcSponge([bigIntFromKey(key)], 1, 220, 0)[0].toString();
