let handler = function (m, { conn, isOwner, isAdmin }) {
    if (!m.quoted) throw false
    let { chat, fromMe, isBaileys } = m.quoted
    if (!fromMe) throw false
    if (!isOwner && !isAdmin) return global.dfail('admin', m, conn)
    if (!isBaileys) return m.reply(`*[ ! ] Esta accion solo puede usarse respondiendo un mensaje reciente del bot*`)
    conn.sendMessage(chat, { delete: m.quoted.vM.key })
}

handler.help = ['suprimir']
handler.tags = ['propietario', 'admins']
handler.command = /^(suprimir|del)$/i

export default handler