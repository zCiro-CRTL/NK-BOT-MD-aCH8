/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
import db from '../lib/database.js'
import * as fs from 'fs'
import not from '../lib/modokuaker.js'

let handler = m => m
handler.all = async function(m, { isAdmin, isBotAdmin }) {
	if (!m.isGroup) return !1
	let chat = db.data.chats[m.chat]
	let { limit, banned } = db.data.users[m.sender]
	if (chat.isBanned) return 
	if (banned) return 
	if (limit < 1) return 
	try{var userthumb=await this.profilePictureUrl(m.sender,'image')}catch{var userthumb='https://i.ibb.co/jhQ7gL0/Sin-Perfil-F.jpg'}
	let mylogo = fs.readFileSync('./multimedia/imagenes/mylogo.jpg')
	let rtps1 = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype === 'extendedTextMessage') ? m.message.extendedTextMessage.text : ''
	let rtps2 = m.text.slice(0).trim().split(/ +/).shift().toLowerCase()
	let etiqueta = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
	let pushname = await this.getName(m.sender)
	let redes = ['https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA?sub_confirmation=1', 'https://vm.tiktok.com/ZMLjP4RBS/', 'https://fb.watch/b7LOc9_LU2/', 'https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA']
	let reddom = redes[Math.floor(Math.random() * redes.length)]
//Random//
if (rtps1.includes("prefijo?") || (rtps1.includes("Prefijo?"))){
m.reply(`*Por si estas preguntando cual es el prefijo del bot*\n_Prefijo actual para uso de comandos_ : \n\n" *${Prefijo}* "\n`)
}
//
if (rtps2.includes("destraba") || rtps2.includes("Destraba") || rtps2.includes("destrava") || rtps2.includes("Destrava")){
if (isAdmin && !m.isBaileys && !m.fromMe) { this.sendMessage(m.chat,{text:not.kuakerzzz},{quoted:m})
} else {
this.sendMessage(m.chat,{text:not.kuakerzzz},{quoted:m})
m.limit = 10
}
}
//
if (rtps1.includes("c suicida") || rtps1.includes("C suicida")){
m.reply(`*El suicidio no es una opcion* 😞🤙`)
setTimeout( () => {
m.reply(`_*Es la solución*_ 😎🤝`)
}, 2500)
m.limit = 5
}
if (rtps1.includes("zzz") || rtps1.includes("Zzz")){
m.reply(`*Tienes sueño o anemia?*\n_*Ve al medico y notaras la diferencia ;)*_ `)
m.limit = 5
}
if (rtps1.includes("impostor") || rtps1.includes("Impostor")){
m.reply(`*AmongUs*`)
m.limit = 1
}
if (rtps1.includes("ctm") || rtps1.includes("Ctm")){
m.reply(`*Cuida-Tu-Mundo*`)
m.limit = 5
}
if (rtps1.includes("lptm") || rtps1.includes("Lptm")){
m.reply(`*La-Paja-Te-Mata*`)
m.limit = 1
}
if (rtps1.includes("ptm") || rtps1.includes("Ptm")){
m.reply(`*Pronto-Te-Moriras*`)
m.limit = 5
}

//Insultos al bot :vvv
if (rtps1.includes("puto bot") || (rtps1.includes("Puto bot") || (rtps1.includes("bot puto") || (rtps1.includes("Bot puto") || (rtps1.includes("pinche bot") || (rtps1.includes("Pinche bot") || (rtps1.includes("bot gey") || (rtps1.includes("Bot gey") || (rtps1.includes("bot gay") || (rtps1.includes("Bot gay"))))))))))){
let resrand = pickRandom(["rpt1", "rpt2", "rpt3", "rpt4", "rpt5", "rpt6", "rpt7", "rpt8", "rpt9", "rpt10", "rpt11", "rpt12", "rpt13", "rpt14", "rpt15", "rpt16", "rpt17", "rpt18", "rpt19", "rpt20", "rpt21", "rpt22", "rpt23", "rpt24", "rpt25", "rpt26", "rpt27", "rpt28", "rpt29", "rpt30", "rpt31", "rpt32", "rpt33", "rpt34", "rpt35", "rpt36", "rpt37", "rpt38", "rpt39", "rpt40", "rpt41", "rpt42", "rpt43", "rpt44", "rpt45", "rpt46", "rpt47", "rpt48", "rpt49", "rpt50", "rpt51", "rpt52", "rpt53", "rpt54", "rpt55", "rpt56", "rpt57", "rpt58", "rpt59", "rpt60", "rpt61", "rpt62", "rpt63", "rpt64", "rpt65", "rpt66", "rpt67", "rpt68", "rpt69", "rpt70", "rpt71", "rpt72", "rpt73", "rpt74", "rpt75", "rpt76", "rpt77"])
this.sendMessage(m.chat, {sticker: {url: "https://raw.githubusercontent.com/NeKosmic/NK-BOT/main/multimedia/misstks/sticker/"+resrand+".webp"}, mentions: [m.sender]}, {quoted: {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "51995386439-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `${pushname}: ${m.text}`, 'jpegThumbnail': mylogo}}} })
m.limit = 5
}

//Simp bot gaaa :u
if (rtps1.includes("bot gracias") || (rtps1.includes("Bot gracias") || (rtps1.includes("gracias bot") || (rtps1.includes("Gracias bot"))))){
this.sendMessage(m.chat, { text: `@${etiqueta.replace(/@.+/, '')} pa servirle mi king nwn`, mentions: [m.sender] }, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "16505434800@s.whatsapp.net" } : {}) },message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": mylogo},"title": `${NombreDelBot}`,"description": "@NeKosmic", "currencyCode": "PEN","priceAmount1000": "5000000","salePriceAmount1000": "500","url": "https://github.com/NeKosmic","retailerId": `000000`,"productImageCount": 5},"businessOwnerJid": `0@s.whatsapp.net` }}}})
m.limit = 5
}
if (rtps1.includes("te amo bot") || (rtps1.includes("Te amo bot") || (rtps1.includes("bot te amo") || (rtps1.includes("Bot te amo"))))){
let resrand = pickRandom(["love1", "love2", "love3", "love4", "love5", "love6"])
this.sendMessage(m.chat, {sticker: {url: "https://raw.githubusercontent.com/NeKosmic/NK-BOT/main/multimedia/misstks/sticker/"+resrand+".webp"}, mentions: [m.sender]}, {quoted: {key : {participant : '0@s.whatsapp.net'},message: {locationMessage: {name: `${pushname} <3`,jpegThumbnail: mylogo}}} })
m.limit = 5
}

//Si 🧐//
if (rtps2.includes("uwu")){
let resrand = pickRandom(["cringe1", "cringe2", "cringe3", "cringe4", "cringe5"])
this.sendMessage(m.chat, {sticker: {url: "https://raw.githubusercontent.com/NeKosmic/NK-BOT/main/multimedia/misstks/sticker/"+resrand+".webp"}}, { quoted: m } )
m.limit = 2
}
if (rtps2.includes("owo")){
this.sendMessage(m.chat, {sticker: {url: "https://raw.githubusercontent.com/NeKosmic/NK-BOT/main/multimedia/misstks/sticker/owobot.webp"}}, { quoted: m } )
m.limit = 1
}
if (rtps2.startsWith("awa")){
this.sendMessage(m.chat, {sticker: {url: "https://raw.githubusercontent.com/NeKosmic/NK-BOT/main/multimedia/misstks/sticker/awabot.webp"}}, { quoted: m } )
m.limit = 1
}
if (rtps2.includes("ewe")){
this.sendMessage(m.chat, {sticker: {url: "https://raw.githubusercontent.com/NeKosmic/NK-BOT/main/multimedia/misstks/sticker/ewebot.webp"}}, { quoted: m } )
m.limit = 1
}
if (rtps2.includes("unu")){
this.sendMessage(m.chat, {sticker: {url: "https://raw.githubusercontent.com/NeKosmic/NK-BOT/main/multimedia/misstks/sticker/unubot.webp"}}, { quoted: m } )
m.limit = 1
}
if (rtps2.includes("7v7")){
this.sendMessage(m.chat, {sticker: {url: "https://raw.githubusercontent.com/NeKosmic/NK-BOT/main/multimedia/misstks/sticker/7v7bot.webp"}}, { quoted: m } )
m.limit = 1
}
if (rtps2.includes("7w7")){
this.sendMessage(m.chat, {sticker: {url: "https://raw.githubusercontent.com/NeKosmic/NK-BOT/main/multimedia/misstks/sticker/7w7bot.webp"}}, { quoted: m } )
m.limit = 1
}
if (rtps2.includes("7u7")){
this.sendMessage(m.chat, {sticker: {url: "https://raw.githubusercontent.com/NeKosmic/NK-BOT/main/multimedia/misstks/sticker/7u7bot.webp"}}, { quoted: m } )
m.limit = 1
}

//Fuertes insultos :v
if (rtps2.includes("tonto")){
m.reply(`*ˢᵉ ᵈᵉᵗᵉᶜᵗᵒ ᵘⁿ ᶦⁿˢᵘˡᵗᵒ ᵐᵘʸ ᶠᵘᵉʳᵗᵉ*\n_*ᵀᵒⁿᵗᵒ*_`)
m.limit = 1
}
if (rtps2.includes("bobo")){
m.reply(`*ˢᵉ ᵈᵉᵗᵉᶜᵗᵒ ᵘⁿ ᶦⁿˢᵘˡᵗᵒ ᵐᵘʸ ᶠᵘᵉʳᵗᵉ*\n_*ᴮᵒᵇᵒ*_`)
m.limit = 1
}
if (rtps2.includes("papanatas")){
m.reply(`*ˢᵉ ᵈᵉᵗᵉᶜᵗᵒ ᵘⁿ ᶦⁿˢᵘˡᵗᵒ ᵐᵘʸ ᶠᵘᵉʳᵗᵉ*\n_*ᴾᵃᵖᵃⁿᵃᵗᵃˢ*_`)
m.limit = 1
}
if (rtps2.includes("perseve")){
m.reply(`*ˢᵉ ᵈᵉᵗᵉᶜᵗᵒ ᵘⁿ ᶦⁿˢᵘˡᵗᵒ ᵐᵘʸ ᶠᵘᵉʳᵗᵉ*\n_*ᴾᵉʳˢᵉᵛᵉ* _`)
m.limit = 1
}
if (rtps2.includes("pelele")){
m.reply(`*ˢᵉ ᵈᵉᵗᵉᶜᵗᵒ ᵘⁿ ᶦⁿˢᵘˡᵗᵒ ᵐᵘʸ ᶠᵘᵉʳᵗᵉ*\n_*ᴾᵉˡᵉˡᵉ*_`)
m.limit = 1
}
if (rtps2.includes("pamplinas")){
m.reply(`*ˢᵉ ᵈᵉᵗᵉᶜᵗᵒ ᵘⁿ ᶦⁿˢᵘˡᵗᵒ ᵐᵘʸ ᶠᵘᵉʳᵗᵉ*\n_*ᴾᵃᵐᵖˡᶦⁿᵃˢ*_`)
m.limit = 1
}
if (rtps2.includes("chispas")){
m.reply(`*ˢᵉ ᵈᵉᵗᵉᶜᵗᵒ ᵘⁿ ᶦⁿˢᵘˡᵗᵒ ᵐᵘʸ ᶠᵘᵉʳᵗᵉ*\n_*ᶜʰᶦˢᵖᵃˢ*_`)
m.limit = 1
}

//fakemsj - no es real . _.
if (rtps1.includes("pasen porno") || (rtps1.includes("Pasen porno") || (rtps1.includes("pasen xxx") || (rtps1.includes("Pasen xxx"))))){
this.sendMessage(m.chat, { text: `https://www.interpol.int 𝙸𝚗𝚝𝚎𝚛𝚙𝚘𝚕 𝚖𝚘𝚗𝚒𝚝𝚘𝚛𝚎𝚊 𝚕𝚘𝚜 𝚐𝚛𝚞𝚙𝚘𝚜 𝚍𝚎 𝚠𝚑𝚊𝚝𝚜𝚊𝚙𝚙\n*${pushname}️* , 𝚂𝚎𝚐𝚞𝚗 𝚕𝚊𝚜 𝚗𝚘𝚛𝚖𝚊𝚜 𝚍𝚎 𝚆𝚑𝚊𝚝𝚜𝙰𝚙𝚙 𝚎𝚜𝚎 𝚝𝚒𝚙𝚘 𝚍𝚎 𝚖𝚊𝚝𝚎𝚛𝚒𝚊𝚕 𝚎𝚜𝚝𝚊𝚗 𝚙𝚛𝚘𝚑𝚒𝚋𝚒𝚍𝚘𝚜, 𝙿𝚘𝚛 𝚛𝚊𝚣𝚘𝚗𝚎𝚜 𝚍𝚎 𝚜𝚎𝚐𝚞𝚛𝚒𝚍𝚊𝚍 𝚝𝚞 𝚗𝚞𝚖𝚎𝚛𝚘 𝚜𝚎𝚛𝚊 𝚊𝚐𝚎𝚗𝚍𝚊𝚍𝚘 𝚎𝚗 𝚕𝚊 *Database...*`, mentions: [m.sender] }, {quoted: {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "51995386439-1604595598@g.us"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: fs.readFileSync('./multimedia/imagenes/rgdata.jpg'), surface: 200, message: `Usuario: ${pushname}\nNumero: ${etiqueta}`, orderTitle: 'Matt_M', sellerJid: '0@s.whatsapp.net'}}} })
m.limit = 10
}

//autorrespuesta multimedia
if (rtps2.includes("kawai")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/onichan.mp3?raw=true"}, contextInfo:{externalAdReply: {title: `Kawaii >~<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `kawai.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.includes("baka")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/baka.mp3?raw=true"}, contextInfo:{externalAdReply: {title: `Baka >~<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `baka.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.includes("onich")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/onich.mp3?raw=true"}, contextInfo:{externalAdReply: {title: `Oni-Chan >~<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `onichan1.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.includes("kudasai")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/yamete.mp3?raw=true"}, contextInfo:{externalAdReply: {title: `Yamete kudasai! >//<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `kudasai1.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.includes("yutki")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/yutki.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Yutki >~<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `yutki.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.includes("yokese")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/yokese.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Yokese >~<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `yokese.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.includes("yajaro")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/yajaro.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Yajaro! >o<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `yajaro.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.includes("woau")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/woau.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Kawaii >~<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `woau.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.includes("unga")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/unga.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Ungaaa >//<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `unga.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.includes("umai")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/umai.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Umai... >~<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `umai.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.includes("imaaa")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/uma.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Imaaa! >~<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `uma.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.includes("uchinchi")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/uchinchi.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Uchinchi >~<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `uchinchi.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.includes("tuturu")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/tuturu.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Tuturu >~<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `tuturu.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.includes("talcho")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/talcho.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Talcho >~<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `talcho.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.includes("ssss")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/sss.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Suprise!!! >w<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `ssss.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.includes("ohayou") || (rtps2.includes("Ohayou") || (rtps2.includes("ohayo") || (rtps2.includes("Ohayo"))))){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/ohayo.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Ohayo >//<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `ohayou.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.includes("sempai")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/sempai.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Sempai >//<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `sempai.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.includes("pupu")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/pupu.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Pupu >.<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `pupu.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.includes("pikachu")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/pikachu.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Pikachu ⚡`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `pikachu.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.includes("ooaa")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/ooaa.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Ooaa >-<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `ooaa.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.includes("omg")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/omg.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `OMG >~<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `omg.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.includes("omaiwa")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/omaiwa.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Omaiwa >o<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `omaiwa.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.includes("omaiga")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/omaiga.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Omaiga >~<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `omaiga.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.includes("ñañañi")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/ñañañi.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Ñañañi >-<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `ñañañi.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.includes("ñaña")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/ñaña.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Ñaña >.<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `ñaña.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.includes("nya")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/nya.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Nya ^-^`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `nya.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.includes("niconico")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/niconico.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Nico-nico >~<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `niconico.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.includes("nani")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/nani.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Nani >_<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `nani.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.includes("motomoto")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/motomoto.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Motomoto >~<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `motomoto.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.includes("mma")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/mma.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Mma... >~<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `mma.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.includes("mitamita")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/mitamita.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Mita-mita >~<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `mitamita.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.includes("kobarashi")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/kobarashi.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Kobarashi >~<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `kobarashi.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.includes("kataka")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/kataka.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Kataka >~<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `kataka.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.includes("jai")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/jai.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Jai... >~<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `jai.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.includes("jentai")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/hentai.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Jentai 7w7`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `jentai.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.includes("asennn")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/asen.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Asennn! >o<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `asennn.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.includes("anana")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/anana.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Anana >~<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `anana.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
//
if (rtps1.includes("papu papu") || (rtps1.includes("Papu papu"))){
await this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audishitxd/papus.m4a?raw=true"}, fileName: `${pushname}.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
this.sendMessage(m.chat, {sticker: {url: "https://raw.githubusercontent.com/NeKosmic/NK-BOT/main/multimedia/misstks/sticker/papudance.webp"}}, { quoted: m } )
m.limit = 1
}
if (rtps1.includes("ª")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audishitxd/aaa.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `ª`, body: `ª`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `a.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps1.includes("ara ara") || (rtps1.includes("Ara ara"))){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/araara.mp3?raw=true"}, contextInfo:{externalAdReply: {title: `Ara-ara >~<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `araara.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps1.startsWith("yamete") || (rtps1.startsWith("Yamete"))){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audiouwu/ya.mp3?raw=true"}, contextInfo:{externalAdReply: {title: `Yamete >//<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `yamete.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps1.includes("buenos dias") || (rtps1.includes("Buenos dias") || (rtps1.includes("buenos días") || (rtps1.includes("Buenos días"))))){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audishitxd/Bdia.m4a?raw=true"}, fileName: `BonDia_xd.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 5
}
//
//
if (rtps1.includes("si 👍") || (rtps1.includes("Si 👍"))){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audishitxd/si_sp.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Si 👍`, body: `Joseph_A`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `si_laik.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps1.includes("no returbio") || (rtps1.includes("No returbio") || (rtps1.includes("No re turbio") || (rtps1.includes("No re turbio"))))){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audishitxd/turrbio.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `No!, Re-Turbio... ._.`, body: `Joseph_A`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `si_laik.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps1.includes("oh me vengo") || (rtps1.includes("Oh me vengo"))){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audishitxd/ohhh_xd.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `Oh! me vengo... 🥵`, body: `Joseph_A`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `si_laik.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps1.includes("con flores") || (rtps1.includes("Con flores"))){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audishitxd/con_flores.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `🥀 Con flores... 🌹`, body: `Joseph_A`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `si_laik.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps1.includes("no digas eso papu") || (rtps1.includes("No digas eso papu"))){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audishitxd/no_papu.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `No papu :'v`, body: `Joseph_A`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `si_laik.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps1.includes("no chupala") || (rtps1.includes("No chupala"))){
this.sendMessage(m.chat, {audio: {url: "https://github.com/NeKosmic/NK-BOT/blob/main/multimedia/sonidos/audishitxd/no-chupala.m4a?raw=true"}, contextInfo:{externalAdReply: {title: `No, chupala... 😎`, body: `Joseph_A`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `si_laik.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}

//God :v
if (rtps2.includes("tesla")){
this.sendMessage(m.chat, {sticker: fs.readFileSync('./multimedia/misstks/teslagod.webp'), mentions: [m.sender] }, { quoted: {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "51995386439-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `Nikola Tesla:\n10-07-1856\n07-01-1943`, 'jpegThumbnail': fs.readFileSync('./multimedia/imagenes/teslagod.jpeg')}}} } )
}
return !0
}

export default handler
