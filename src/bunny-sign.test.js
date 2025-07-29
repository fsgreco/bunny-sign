import { eyes, mouths, generateBunnySign } from './bunny-sign.js'
import { delay } from './utils.js'
import logUpdate from 'log-update'

export const showAllCombinationsModulo = async () => {
	const totalEyes = eyes.length
	const totalMouths = mouths.length
	const totalCombinations = totalEyes * totalMouths

	console.log(`Testing all ${totalCombinations} possible bunny face combinations:`)

	// I'm using a single counter and modulo operator to get all combinations
	for (let i = 0; i < totalCombinations; i++) {
		// With modulo I extract the correct indices
		const eyeIndex = Math.floor(i / totalMouths) % totalEyes
		const mouthIndex = i % totalMouths

		const eye = eyes[eyeIndex]
		const mouth = mouths[mouthIndex]

		const message = `Combo ${i + 1}/${totalCombinations}: Eye="${eye}" Mouth="${mouth}"`
		logUpdate('\n' + generateBunnySign(message, { eye, mouth }))
		await delay(1000)
	}

	console.log(`\nCompleted testing ${totalCombinations} combinations.`)
}

showAllCombinationsModulo()
