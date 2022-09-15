/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
let handler = async (m, { conn, args }) => {
	let pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './multimedia/imagenes/avatar_contact.png'
	let name = await conn.getName(m.sender)
try {
	let wa = await fetchJson(`https://latam-api.vercel.app/api/gpwa?apikey=${MyApiKey}`)
	conn.relayMessage(m.chat, {extendedTextMessage:{text: wa.enlaces+`\n${String.fromCharCode(8206).repeat(850)}ᴺᴼᵀᴬ" ˢᶦ ᵉⁿ ᵉˢᵗᵉ ᵍʳᵘᵖᵒ ᵉˢᵗᵃ́ ᵖʳᵒʰᶦᵇᶦᵈᵒ ᶜᵒᵐᵖᵃʳᵗᶦʳ ᵉⁿˡᵃᶜᵉˢ• ᴰᵉ ˢᵉʳ ⁿᵉᶜᵉˢᵃʳᶦᵒ ˡᵒˢ ᵃᵈᵐᶦⁿᶦˢᵗʳᵃᵈᵒʳᵉˢ ᵗᶦᵉⁿᵉⁿ ᵗᵒᵈᵒ ᵉˡ ᵈᵉʳᵉᶜʰᵒ ᵃ ᵉˡᶦᵐᶦⁿᵃʳ ᵃˡ ᵇᵒᵗ ⁻`, ...{ contextInfo:{"externalAdReply":{"title": `${name} Quieres agregar tu grupo :D?`,"body": `Toca aqui ;3`,"previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": await getBuffer(pp), "sourceUrl": 'https://api.whatsapp.com/send?phone=51995386439&text=Wenasss!%0ADeseo%20agregar%20mi%20grupo%20al%20comando%20del%20bot%0AAsunto%20del%20grupo%3A%20%0ALink%3A%20'}}}
}}, {})
} catch (e) {
m.reply(MultiNK.Error0())
}
}

handler.help = ['wagrupos']
handler.tags = ['']
handler.command = /^(wagrupos|gruposwa|grupos)$/i
handler.limit = 2

export default handler
