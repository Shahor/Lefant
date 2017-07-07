import { getAllNotes, Note } from "./constants"

enum Char {
	Line = "-",
	Space = " ",
	Note = "♩",
}

function isLedgerLine(index: number): boolean {
	return index < Note.E4 || index > Note.A5
}

function drawStaffLine(
	myNote: Note,
	/* tete de */
	lineNote: Note,
): string {
	const drawNote: boolean = myNote === lineNote
	const isLedger: boolean = isLedgerLine(lineNote)
	const isSpace: boolean = lineNote % 2 === 0

	let note: Char = Char.Line
	let line: Char = Char.Line

	if (isLedger) {
		line = Char.Space
		note = Char.Space

		if (drawNote) {
			note = Char.Note
		}
	} else {
		line = isSpace ? Char.Space : Char.Line
		note = drawNote ? Char.Note : line
	}

	return `${line} ${note} ${line}`
}

export function draw(note: Note): void {
	const lines: string[] = getAllNotes().map(lineNote => {
		return drawStaffLine(note, lineNote)
	})

	console.log(lines.reverse().join("\n"))
}
