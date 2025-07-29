// @ts-check
import { useAscii } from './utils.js'

/*
|￣￣￣￣￣￣￣￣￣￣￣|
    Bunny Sign 
|＿＿＿＿＿＿＿＿＿＿＿|
  (\__/) ||
  (•ㅅ•) ||
  /    づ
*/

export const eyes = useAscii ? ['•', 'o', '•', 'O', '^'] : ['•', '●', '○', 'o', "'", '^']

export const mouths = useAscii ? ['*'] : ['ㅅ']

/* Extended sets */
/* ['*' '•', 'O', 'o', 'o', '•', '-' ] */
/* ['ㅅ' '•', '○', '■', '▪', '▫', '▬', '▭', '-', '○' ] */

/**
 * Generates a frame of the bunny sign
 * @param {string} msg The message for the sign
 * @param {{mouth?: string, eye?: string}} param1 optional configuration object
 * @returns {string}
 */
export const generateBunnySign = (msg, { mouth = mouths[0], eye = eyes[0] } = {}) => {
	const pad = ' '.repeat(5)

	const addNewLines = msg => {
		let count = 0
		const msgWithNewLines = msg.split(' ').reduce(
			(accWords, word) => {
				count = count + word.length + 1
				if (count > 13) {
					count = 0
					return [...accWords, `\n${pad}`, word]
				}
				return [...accWords, word]
			},
			[pad]
		)
		return msgWithNewLines.join(' ')
	}

	const message = addNewLines(msg)

	const eme = `${eye}${mouth}${eye}`
	return [
		` |￣￣￣￣￣￣￣￣￣￣￣|`,
		`${message}`,
		` |＿＿＿＿＿＿＿＿＿＿＿|`,
		`   (\\__/) ||`,
		`   (${eme}) ||`,
		`   /    づ`,
	].join('\n')
}
