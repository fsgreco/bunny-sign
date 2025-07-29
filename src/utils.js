import { platform } from 'node:os'

export const useAscii = platform() === 'win32'

export const random = (min, max) => Math.floor(Math.random() * (max - min) + min)

export const pickRandom = arr => arr[random(0, arr.length - 1)]

// prettier-ignore
export const delay = ms => new Promise(resolve => { setTimeout(resolve, ms) })
