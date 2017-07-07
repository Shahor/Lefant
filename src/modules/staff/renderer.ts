import { getAllNotes, Note } from "./constants"

enum Char {
	Line = "-",
	Space = " ",
	Note = "♪",
}

const LEDGER_BOTTOM = Note.E4
const LEDGER_TOP = Note.F5
let NOTE_DRAWN = false

function isLedgerLine(index: number): boolean {
	return index < LEDGER_BOTTOM || index > LEDGER_TOP
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

		const isBelowBottomAndDrawn: boolean =
			NOTE_DRAWN && lineNote > myNote && lineNote < LEDGER_BOTTOM

		const isAboveTopAndNotDrawn: boolean =
			!NOTE_DRAWN && lineNote < myNote && lineNote > LEDGER_TOP

		// For readability purposes ledger lines are added between the note and the closest staff line
		if (isBelowBottomAndDrawn || isAboveTopAndNotDrawn) {
			note = Char.Line
		}

		if (drawNote) {
			note = Char.Note
		}
	} else {
		line = isSpace ? Char.Space : Char.Line
		note = drawNote ? Char.Note : line
	}

	// Set a flag so we keep track of what's been done already
	if (!NOTE_DRAWN) {
		NOTE_DRAWN = note === Char.Note
	}

	return `${line} ${note} ${line}`
}

export function draw(note: Note): void {
	const lines: string[] = getAllNotes().map(lineNote => {
		return drawStaffLine(note, lineNote)
	})

	console.log(lines.reverse().join("\n"))
}
