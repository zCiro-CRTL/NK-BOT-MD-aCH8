import db from '../lib/database.js'

let linkRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;

export async function before(m, { conn, isAdmin, isBotAdmin, usedPrefix }) {
	if (m.isBaileys && m.fromMe)
        return !0
        if (!m.isGroup) return !1
        let chat = db.data.chats[m.chat]
        let bot = db.data.settings[this.user.jid] || {}
        const isGroupLink = linkRegex.exec(m.text)
        if (chat.antiLink2 && isGroupLink && !isAdmin) { 
        	if (isBotAdmin) {
        	const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}` 
        if (m.text.includes(linkThisGroup)) return !0
        }
        await conn.sendButton(m.chat, `*[ ! ] Link detectado [ ! ]*\n`, `${isBotAdmin ? '' : '_Por suerte no soy acmin, asi que no puedo hacer nada unu'}`, NombreDelBot, ['[ DESACTIVAR ANTILINK 2 ]', usedPrefix+'apagar antilink2'], m)
        if (isBotAdmin && bot.restrict) {
        	await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        } else if (!bot.restrict) return m.reply('[ ! ] Para realizar acciones de eliminación, mi dueño tiene que encender el modo restringido!')
        }
    return !0
}
