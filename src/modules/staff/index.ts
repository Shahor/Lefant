import { getRandomNote, Note } from "./constants"
import { draw } from "./renderer"

export function ask(): void {
	const note: Note = getRandomNote()

	draw(note)
}
