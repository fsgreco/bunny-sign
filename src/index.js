// @ts-check
import logUpdate from 'log-update'
import { eyes, generateBunnySign, mouths } from './bunny-sign.js'
import { delay, pickRandom, random } from './utils.js'

/** @typedef { string | Array<string> } Messages */
/**
 * Show a bunny with a sign
 * @param { Messages } messages
 * @param {{persist: boolean}} options
 */
export const showBunnySign = async (messages, options = { persist: false }) => {
	const messagesList = Array.isArray(messages) ? messages : [messages]

	for (const message of messagesList) {
		let msg = []

		let words = message.split(' ')

		for (let [index, word] of words.entries()) {
			let lastWord = index === words.length - 1
			if (word) msg.push(word)

			const mouth = lastWord ? mouths[0] : pickRandom(mouths)
			const eye = lastWord ? eyes[0] : pickRandom(eyes)

			logUpdate('\n' + generateBunnySign(msg.join(' '), { mouth, eye }))

			await delay(lastWord ? random(500, 700) : random(100, 400))
		}
	}
	if (!options.persist) logUpdate.clear()
}
