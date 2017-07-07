function randomInclusive(min: number, max: number): number {
	min = Math.ceil(min)
	max = Math.floor(max)

	return Math.floor(Math.random() * (max - min + 1)) + min
}

export enum Note {
	// First note on the treble clef
	G3 = 0,
	A3,
	B3,
	C4,
	D4,
	E4,
	F4,
	G4,
	A4,
	B4,
	C5,
	D5,
	E5,
	F5,
	G5,
	A5,
	B5,
	// Last note on the treble clef
	C6,
}

export function getAllNotes(): Note[] {
	const noteList = Object.keys(Note)
	const set: number[] = noteList
		.slice(0, noteList.length / 2)
		.map(note => parseInt(note, 10))

	return set
}

export function getRandomNote(): Note {
	const notes: Note[] = getAllNotes()

	return notes[randomInclusive(0, notes.length - 1)] as Note
}
