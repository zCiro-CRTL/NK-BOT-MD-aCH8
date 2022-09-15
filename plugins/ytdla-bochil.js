import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'

let handler = async (m, { conn, args }) => {
	if (!args[0]) return m.reply(`Que desea descargar de Youtube?, Ejemplo de uso: \n\n${Prefijo + command} https://youtu.be/ed-6VSF-GGc`)
	if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('*[ ! ] Link inválido*\n_Por favor, use un link de YouTube_\n')
	let name = await conn.getName(m.sender)
	let mcarga = m.reply(MultiNK.Proces(name))
	await mcarga 
	try {
		let q = '128kbps'
		let v = args[0]
		const yt = await youtubedl(v).catch(async () => await youtubedlv2(v)).catch(async () => await youtubedlv3(v))
		const dl_url = await yt.audio[q].download()
		const titulodl = await yt.title
		const size = await yt.audio[q].fileSizeH
		conn.sendMessage(m.chat, { audio: { url: dl_url }, contextInfo:{"externalAdReply":{"title": `${titulodl}`,"body": `${NombreDelBot} 🔥`,"previewType": "PHOTO","thumbnailUrl": yt.thumbnail,"thumbnail": ``,"sourceUrl": `${dl_url}`}}, mimetype: 'audio/mp4', fileName: `${titulodl}.mp3` }, { quoted: m })
		} catch {
			await conn.reply(m.chat, MultiNK.Error1(), m)
}
}

handler.help = ['ytvbochi <link>']
handler.tags = ['servicio']
handler.command = /^(ytabochi)$/i

export default handler
