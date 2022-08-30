import Connection from '../lib/connection.js'

let handler = async (m, { conn, args, participants }) => {
	let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat 
	console.log(Object.keys(Connection.store.presences))
	//console.log(Object.keys(Connection.store.state[id]))
	/**let online = [...Object.keys(Connection.store.presences[id]), conn.user.id.split(':')[0]+"@s.whatsapp.net"]
	await conn.sendMessage(m.chat,{text:`=> [ Lista de usuarios con mayor actividad en el grupo ]\n=> Cantidad : ` + online.length+'\n\n' + online.map(v => '🧐🍷 @' + v.replace(/@.+/, '')).join`\n`, mentions: online.map(v => v)}, {quoted:m})**/
}

handler.command = /^(activos)$/i
handler.admin = true

export default handler