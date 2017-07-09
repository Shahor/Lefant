import { white } from "chalk"
import { exit } from "process"
import { get, start, stop } from "prompt"
import { getRandomNote, Note } from "./constants"
import { draw } from "./renderer"

function handleUserInput(note: string, pickedNote: Note) {
	stop()
	note = note.substr(0, 1)
	const picked: string = Note[pickedNote].substr(0, 1)

	if (note === picked) {
		console.log(`✅  well done!`)
		exit(0)
	}
	console.log(`❌  What a noob :D`)
	exit(1)
}

export function ask(): void {
	const note: Note = getRandomNote()
	draw(note)

	start()
	get(
		{
			properties: {
				note: {
					description: white("Enter the note you read"),
					message: "A note is a letter between A and G (inclusive)",
					pattern: /[a-gA-G]\d{0,1}/,
					required: true,
				},
			},
		},
		(_, result: { note: string }) => {
			stop()
			handleUserInput(result.note.toUpperCase(), note)
		},
	)
}
