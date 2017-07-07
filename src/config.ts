import { red } from "chalk"
import { readFileSync } from "fs"
import { homedir } from "os"
import { join } from "path"
import { exit } from "process"

const CONFIG_PATH: string = join(homedir(), ".lefantrc")
const ENCODING: string = "utf8"

let config: string = ""
try {
	config = readFileSync(CONFIG_PATH, ENCODING)
} catch (e) {
	console.log(
		red("❌  Please create a '.lefantrc' file under your home directory"),
	)
	exit(-1)
}

export default JSON.parse(config)
