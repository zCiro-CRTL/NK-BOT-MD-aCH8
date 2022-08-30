import db from '../lib/database.js'
import hyfc from '../lib/calendario.js'
import * as fs from 'fs'

let handler = async (m, { conn, args }) => {

m.reply("kuaker :v "+hyfc.fechaCompleta)
}
handler.help = ['testcmd']
handler.tags = ['test']
handler.command = /^(test|prueba)$/i

export default handler

