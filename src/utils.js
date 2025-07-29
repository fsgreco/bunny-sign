import { platform } from 'node:os'

export const useAscii = platform() === 'win32'

export const random = (min, max) => Math.floor(Math.random() * (max - min) + min)

export const pickRandom = arr => arr[random(0, arr.length - 1)]

export const delay = ms =>
	new Promise(res => {
		setTimeout(res, ms)
	})
