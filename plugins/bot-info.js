/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
import Connection from '../lib/connection.js'
import { plugins } from '../lib/plugins.js'
import { cpus as _cpus, totalmem, freemem, platform, type, arch, hostname } from 'os'
import { performance } from 'perf_hooks'
import { sizeFormatter } from 'human-readable'
import now from 'performance-now'
const { generateWAMessageFromContent } = (await import('@adiwajshing/baileys')).default
let format = sizeFormatter({
  std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
})
let handler = async (m, { conn }) => {
  const chats = Object.entries(Connection.store.chats).filter(([id, data]) => id && data.isChats)
  const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) //groups.filter(v => !v.read_only)
  const used = process.memoryUsage()
  const cpus = _cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
    return cpu
  })
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total
    last.speed += cpu.speed / length
    last.times.user += cpu.times.user
    last.times.nice += cpu.times.nice
    last.times.sys += cpu.times.sys
    last.times.idle += cpu.times.idle
    last.times.irq += cpu.times.irq
    return last
  }, {
    speed: 0,
    total: 0,
    times: {
      user: 0,
      nice: 0,
      sys: 0,
      idle: 0,
      irq: 0
    }
  })
  const mcarga = m.reply('_Obteniendo información..._')
  await mcarga
  let old = performance.now()
  let neww = performance.now()
  let speed = neww - old
  let timestamp = now()
  let latensi = now() - timestamp
  let _uptime = process.uptime() * 1000
  let uptime = timeString(process.uptime())
  let more = String.fromCharCode(8206)
  let masss = more.repeat(850)
try {
    let wimg = await fetch('https://pastebin.com/raw/Bu8esjPA')
    let imgw = await conn.profilePictureUrl(conn.user.jid, 'image').catch(_ => './multimedia/imagenes/avatar_contact.png')
    var wjson = await wimg.json()
    var pweb = wjson.nk_media || imgw
    } catch (e) {
    var pweb = await conn.profilePictureUrl(conn.user.jid, 'image').catch(_ => './multimedia/imagenes/avatar_contact.png')
    }
  let infotext = `
*~》INFORMACIÓN《~*
${masss}
┏─━─━━──━━─━─┓
➪ *Bot* : _(activo)_
➪ *Dueño actual* : _${Propietario}_
➪ *Tiempo de ejecucion* : _${uptime}._
➪ *Apodo en Whatsapp* : _${conn.user.name}._
➪ *Grupos con mayor actividad* : _${groupsIn.length}_
➪ *Grupos nuevos* : _${groupsIn.length}_
➪ *Grupos abandonados* : _${groupsIn.length - groupsIn.length}_
➪ *Chats personales* : _${chats.length - groupsIn.length}_
➪ *Total de chats* : _${chats.length}_
➪ *Hits de hoy* : _${global.hit_cmd.length}_
➪ *Version del bot* : _${BotVersion}_
➪ *Wa-web Api* : _https://github.com/adiwajshing/Baileys_
➪ *Sc - Github* : _https://github.com/NeKosmic/NK-BOT-MD_
➪ *Total de plugins* : _${Object.keys(plugins).length}_
➪ *Velocidad de procesamiento* : _${speed} s..._
➪ *Velocidad de conexion* : _${latensi.toFixed(4)}ms..._
➪ *RAM:* _${format(totalmem() - freemem())} Restantes De ${format(totalmem())}_
➪ *Plataforma* : _${platform()}_
➪ *Base OS* : _${type()}_
➪ *Arquitectura* : _${arch()}_
➪ *Host* : _${hostname()}_

➫ _Consumó de memoria :_
${'```' + Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${format(used[key])}`).join('\n') + '```'}
➫ ${cpus[0] ? `_Uso total de CPU_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usado (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
┗─━─「 ✵ 」━─━─┛`.trim()
const prep=generateWAMessageFromContent(m.chat,{orderMessage:{orderId:'5352482274766633',thumbnail:await getBuffer(pweb),itemCount:-369,status:1,surface:1,message:infotext,orderTitle:NombreDelBot+` 🔥`,sellerJid:'51995386439@s.whatsapp.net',token:'1655878716',priceAmount:'666000',totalAmount1000:'9999999999',totalCurrencyCode:'PEN',contextInfo:null,}},{quoted:m})
await conn.relayMessage(m.chat, prep.message,  { messageId: prep.key.id })
reacMoji(m.chat, conn, '🤖', m)
}

handler.help = ['informacion']
handler.tags = ['casual']
handler.command = /^(informacion|infobot|ping|speed|info|alive|perfil)$/i

export default handler
