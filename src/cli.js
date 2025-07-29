#! /usr/bin/env node
import { showBunnySign } from './index.js'
import { parseArgs } from 'node:util'

/** @type {import('node:util').ParseArgsConfig['options']} */
const options = { clear: { type: 'boolean', short: 'c', default: false } }
const { values, positionals: phrases } = parseArgs({ options, allowPositionals: true })

showBunnySign(phrases, { persist: !values.clear })
