import webp from 'node-webpmux'
import { randomBytes } from 'crypto'
import { addExif } from '../lib/sticker.js'

let handler = async (m, { conn, text }) => {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
    let attexto = encodeURIComponent(teks)
    let attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${attexto}`) 
    let stiker = await addExif(attp2, '', `[_>] ${NombreDelBot}\n`)
conn.sendMessage(m.chat, {sticker: stiker}, {quoted: m})
}

handler.help = ['attp <texto>']
handler.tags = ['conversor']

handler.command = /^attp$/i

export default handler

const randomID = length => randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)
