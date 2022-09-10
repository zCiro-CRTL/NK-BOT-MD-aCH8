/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
let handler = async (m, { conn, command, text }) => {
	if (!text) return m.reply(`Que desea buscar en Youtube?, Ejemplo de uso: \n\n${Prefijo + command} mtc s3rl`)
	let name = await conn.getName(m.sender)
	let mcarga = m.reply(`_Procesando, ${name} por favor espere..._`)
	await mcarga
	let playtext = encodeURIComponent(text)
	let numran = pickRandom([0, 1, 2])
try {
	let myapiyts = await fetchJson(`https://latam-api.vercel.app/api/yts?apikey=${MyApiKey}&q=${playtext}`)
	let myapidl = await fetchJson(`https://latam-api.vercel.app/api/ytmp3_2?apikey=${MyApiKey}&q=${myapiyts.resultados[numran].url}`)
	let ytthumb = await getBuffer(myapidl.logo)
	await conn.sendMessage(m.chat, {text: `
*✍️ Titulo:* ${myapidl.titulo}
*🗜️ Tamaño:* ${myapidl.peso}
*🪀 Resultado:* ${numran}/3

[⇆ㅤ◁ㅤㅤ❚❚ㅤㅤ▷ㅤ↻]


_Enviando audio, espere..._
`.trim(), contextInfo:{"externalAdReply":{"title": `${myapidl.titulo}`,"body": `⇆ㅤㅤ◁ㅤㅤ❚❚ㅤㅤ▷ㅤㅤ↻`,"previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": ytthumb,"sourceUrl": myapidl.descarga }}}, {quoted: m })
conn.sendMessage(m.chat, { audio: { url: myapidl.descarga }, mimetype: 'audio/mp4', fileName: `${myapidl.titulo}.mp3` }, { quoted: m }).catch(e => {m.reply(`Ocurrio un error, por favor use el comando:\n\n${Prefijo}audio ${text}\n`)})
} catch (e) {
m.reply(`[ ! ] Error, vuelva a intentarlo mas tarde...`)
}
}

handler.help = ['play <texto>']
handler.tags = ['servicio']
handler.command = /^play$/i
handler.limit = true

export default handler