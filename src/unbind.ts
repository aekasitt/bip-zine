/* ~~/src/unbind.ts */

// imports
import { execSync } from 'node:child_process'
import { promisify } from 'node:util'

// enumerate
type Zine = 'bips' | 'bips.th' | 'payjoin' | 'payjoin.th'

let unbind = async () => {
  let zine: Zine = process.argv.slice(2)[0] as Zine
  if (!['bips', 'bips.th', 'payjoin', 'payjoin.th'].includes(zine)) {
    console.error('Invalid zine selected')
    return
  }
  let commands: string[] = [
    `pdftoppm -jpeg -r 300 ${zine}.pdf -f 1 -l 1 -singlefile -x 0 -y 0 -W 1240 -H 1754 docs/${zine}.8`,
    `pdftoppm -jpeg -r 300 ${zine}.pdf -f 1 -l 1 -singlefile -x 1240 -y 0 -W 1240 -H 1754 docs/${zine}.1`,
    `pdftoppm -jpeg -r 300 ${zine}.pdf -f 1 -l 1 -singlefile -x 0 -y 1754 -W 1240 -H 1754 docs/${zine}.6`,
    `pdftoppm -jpeg -r 300 ${zine}.pdf -f 1 -l 1 -singlefile -x 1240 -y 1754 -W 1240 -H 1754 docs/${zine}.3`,
    `pdftoppm -jpeg -r 300 ${zine}.pdf -f 2 -l 2 -singlefile -x 0 -y 0 -W 1240 -H 1754 docs/${zine}.2`,
    `pdftoppm -jpeg -r 300 ${zine}.pdf -f 2 -l 2 -singlefile -x 1240 -y 0 -W 1240 -H 1754 docs/${zine}.7`,
    `pdftoppm -jpeg -r 300 ${zine}.pdf -f 2 -l 2 -singlefile -x 0 -y 1754 -W 1240 -H 1754 docs/${zine}.4`,
    `pdftoppm -jpeg -r 300 ${zine}.pdf -f 2 -l 2 -singlefile -x 1240 -y 1754 -W 1240 -H 1754 docs/${zine}.5`,
  ]
  for (let i = 0; i < commands.length; i++) {
    let [stdout, stderr] = execSync(commands[i])
    if (!!stderr) console.error(stderr)
    else if (!!stdout) {
      console.log(stdout)
    }
  }
  console.log(`Images of unbound ${zine}.pdf pages created under docs/ directory`)
}

// run
promisify(unbind)()
  .then(process.exit(0))
  .catch(process.exit(-1))
