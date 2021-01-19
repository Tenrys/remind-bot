import cmdParse from "./cmd-parse"
import { cmdChar, cmdDict } from "./config"

const { handler, deps, msg } = cmdParse(
  cmdChar,
  cmdDict,
  "!remind 5s this is a test"
)

console.log(handler(msg, ...deps))
