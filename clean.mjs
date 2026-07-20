import { readdirSync, readFileSync, writeFileSync, statSync } from 'fs'
import { join } from 'path'

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    if (statSync(p).isDirectory()) { walk(p); continue }
    if (!/\.(ts|tsx|css|html|json)$/.test(p)) continue
    let s = readFileSync(p, 'utf8')
    const before = s
    s = s
      .replace(/^\uFEFF/, '')            // strip BOM
      .replace(/[\u201C\u201D]/g, '"')   // curly double quotes -> "
      .replace(/[\u2018\u2019]/g, "'")   // curly single quotes -> '
      .replace(/[\u2013\u2014]/g, '-')   // en/em dash -> -
      .replace(/[\u00A0]/g, ' ')         // non-breaking space -> normal space
      .replace(/[\u200B\u200C\u200D\uFEFF]/g, '') // zero-width chars -> gone
    if (s !== before) { writeFileSync(p, s, 'utf8'); console.log('cleaned', p) }
  }
}
walk('./src')
console.log('done')