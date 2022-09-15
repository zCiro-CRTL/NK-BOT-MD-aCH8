/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
let handler = async (m, { conn, args }) => { 
	if(!args[0]) return m.reply('*[ ! ] Y el Link?*')
	if(!isUrl(args[0]) && !args[0].includes('https://www.mediafire.com/')) return m.reply('*[ ! ] Link invalido*\n_Por favor, use un link de MediaFire_')
	let name = await conn.getName(m.sender)
	const msj = m.reply(MultiNK.Proces(name))
	await msj
try {
let resm = await fetchJson(`https://latam-api.vercel.app/api/mediafiredl?apikey=${MyApiKey}&q=${args[0]}`)
conn.sendMessage(m.chat, { document: { url: resm.descarga }, mimetype: resm.extension, fileName: `${resm.nombre}`, jpegThumbnail: await miniLoc('./multimedia/imagenes/logo.jpg') }, { quoted: m })
} catch (e) {
m.reply(MultiNK.Error0())
}
}

handler.help = ['mediafire <Link>']
handler.tags = ['servicio']
handler.command = /^(mediafire)$/i
handler.limit = true

export default handler