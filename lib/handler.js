import { smsg } from './lib/simple.js'
import { plugins } from './lib/plugins.js'
import { format } from 'util'
import { fileURLToPath } from 'url'
import path, { join } from 'path'
import { unwatchFile, watchFile } from 'fs'
import chalk from 'chalk'
import Connection from './lib/connection.js'
import printMessage from './lib/print.js'
import Helper from './lib/helper.js'
import db, { loadDatabase } from './lib/database.js'
import Queque from './lib/queque.js'
import * as fs from 'fs'
import moment from 'moment-timezone'

/** @type {import('@adiwajshing/baileys')} */
const { getContentType, proto } = (await import('@adiwajshing/baileys')).default

const isNumber = x => typeof x === 'number' && !isNaN(x)
/**
 * Handle messages upsert
 * @this {import('./lib/connection').Socket}
 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['messages.upsert']} chatUpdate
 */
export async function handler(chatUpdate) {
    this.msgqueque = this.msgqueque || new Queque()
    if (!chatUpdate)
        return
    let m = chatUpdate.messages[chatUpdate.messages.length - 1]
    if (!m)
        return
    if (db.data == null)
        await loadDatabase()
    try {
        m = smsg(this, m) || m
        if (!m)
            return
        m.exp = 0
        m.limit = false
        try {
            // TODO: use loop to insert data instead of this
            let user = db.data.users[m.sender]
            if (typeof user !== 'object')
                db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.exp))
                    user.exp = 0
                if (!isNumber(user.limit))
                    user.limit = 10
                if (!isNumber(user.lastclaim))
                    user.lastclaim = 0
                if (!('registered' in user))
                    user.registered = false
                if (!user.registered) {
                    if (!('name' in user))
                        user.name = m.name
                    if (!isNumber(user.age))
                        user.age = -1
                    if (!isNumber(user.regTime))
                        user.regTime = -1
                }
                if (!isNumber(user.afk))
                    user.afk = -1
                if (!('afkReason' in user))
                    user.afkReason = ''
                if (!('banned' in user))
                    user.banned = false
                if (!isNumber(user.warn))
                    user.warn = 0
                if (!isNumber(user.level))
                    user.level = 0
                if (!('role' in user))
                    user.role = 'Esclavo nivel 1'
                if (!('autolevelup' in user))
                    user.autolevelup = true

                if (!isNumber(user.money))
                    user.money = 0
                if (!isNumber(user.health))
                    user.health = 10
                if (!isNumber(user.limit))
                    user.limit = 0
                if (!isNumber(user.potion))
                    user.potion = 0
                if (!isNumber(user.trash))
                    user.trash = 0
                if (!isNumber(user.wood))
                    user.wood = 0
                if (!isNumber(user.rock))
                    user.rock = 0
                if (!isNumber(user.string))
                    user.string = 0
                if (!isNumber(user.petFood))
                    user.petFood = 0

                if (!isNumber(user.emerald))
                    user.emerald = 0
                if (!isNumber(user.diamond))
                    user.diamond = 0
                if (!isNumber(user.gold))
                    user.gold = 0
                if (!isNumber(user.iron))
                    user.iron = 0

                if (!isNumber(user.common))
                    user.common = 0
                if (!isNumber(user.uncommon))
                    user.uncommon = 0
                if (!isNumber(user.mythic))
                    user.mythic = 0
                if (!isNumber(user.legendary))
                    user.legendary = 0
                if (!isNumber(user.pet))
                    user.pet = 0

                if (!isNumber(user.horse))
                    user.horse = 0
                if (!isNumber(user.horseexp))
                    user.horseexp = 0
                if (!isNumber(user.cat))
                    user.cat = 0
                if (!isNumber(user.catexp))
                    user.catexp = 0
                if (!isNumber(user.fox))
                    user.fox = 0
                if (!isNumber(user.foxhexp))
                    user.foxexp = 0
                if (!isNumber(user.dog))
                    user.dog = 0
                if (!isNumber(user.dogexp))
                    user.dogexp = 0

                if (!isNumber(user.horselastfeed))
                    user.horselastfeed = 0
                if (!isNumber(user.catlastfeed))
                    user.catlastfeed = 0
                if (!isNumber(user.foxlastfeed))
                    user.foxlastfeed = 0
                if (!isNumber(user.doglastfeed))
                    user.doglastfeed = 0

                if (!isNumber(user.armor))
                    user.armor = 0
                if (!isNumber(user.armordurability))
                    user.armordurability = 0
                if (!isNumber(user.sword))
                    user.sword = 0
                if (!isNumber(user.sworddurability))
                    user.sworddurability = 0
                if (!isNumber(user.pickaxe))
                    user.pickaxe = 0
                if (!isNumber(user.pickaxedurability))
                    user.pickaxedurability = 0
                if (!isNumber(user.fishingrod))
                    user.fishingrod = 0
                if (!isNumber(user.fishingroddurability))
                    user.fishingroddurability = 0

                if (!isNumber(user.lastclaim))
                    user.lastclaim = 0
                if (!isNumber(user.lastadventure))
                    user.lastadventure = 0
                if (!isNumber(user.lastfishing))
                    user.lastfishing = 0
                if (!isNumber(user.lastdungeon))
                    user.lastdungeon = 0
                if (!isNumber(user.lastduel))
                    user.lastduel = 0
                if (!isNumber(user.lastmining))
                    user.lastmining = 0
                if (!isNumber(user.lasthunt))
                    user.lasthunt = 0
                if (!isNumber(user.lastweekly))
                    user.lastweekly = 0
                if (!isNumber(user.lastmonthly))
                    user.lastmonthly = 0
            } else
                db.data.users[m.sender] = {
                    exp: 0,
                    limit: 10,
                    lastclaim: 0,
                    registered: false,
                    name: m.name,
                    age: -1,
                    regTime: -1,
                    afk: -1,
                    afkReason: '',
                    banned: false,
                    warn: 0,
                    level: 0,
                    role: 'Esclavo nivel 1',
                    autolevelup: true,

                    money: 0,
                    health: 10,
                    limit: 20,
                    potion: 5,
                    trash: 0,
                    wood: 0,
                    rock: 0,
                    string: 0,

                    emerald: 0,
                    diamond: 0,
                    gold: 0,
                    iron: 0,

                    common: 0,
                    uncommon: 0,
                    mythic: 0,
                    legendary: 0,
                    pet: 0,

                    horse: 0,
                    horseexp: 0,
                    cat: 0,
                    catngexp: 0,
                    fox: 0,
                    foxexp: 0,
                    dog: 0,
                    dogexp: 0,

                    horselastfeed: 0,
                    catlastfeed: 0,
                    foxlastfeed: 0,
                    doglastfeed: 0,

                    armor: 0,
                    armordurability: 0,
                    sword: 0,
                    sworddurability: 0,
                    pickaxe: 0,
                    pickaxedurability: 0,
                    fishingrod: 0,
                    fishingroddurability: 0,

                    lastclaim: 0,
                    lastadventure: 0,
                    lastfishing: 0,
                    lastdungeon: 0,
                    lastduel: 0,
                    lastmining: 0,
                    lasthunt: 0,
                    lastweekly: 0,
                    lastmonthly: 0,
                }
            let chat = db.data.chats[m.chat]
            if (typeof chat !== 'object')
                db.data.chats[m.chat] = {}
            if (chat) {
                if (!('isBanned' in chat))
                    chat.isBanned = false
                if (!('estranjerosnot' in chat))
                    chat.estranjerosnot = false
                if (!('antifake1' in chat))
                    chat.antifake1 = false
                if (!('antifake2' in chat))
                    chat.antifake2 = false
                if (!('welcome' in chat))
                    chat.welcome = false
                if (!('detect' in chat))
                    chat.detect = false
                if (!('delete' in chat))
                    chat.delete = false
                if (!('antiLink' in chat))
                    chat.antiLink = false
                if (!('antiLink2' in chat))
                    chat.antiLink2 = false
                if (!('antiviewonce' in chat))
                    chat.antiviewonce = false
                if (!('antiTraba' in chat))
                    chat.antiTraba = false
                if (!('simi' in chat))
                    chat.simi = false
                if (!('antiToxic' in chat))
                    chat.antiToxic = false
                if (!isNumber(chat.expired))
                    chat.expired = 0
            } else
                db.data.chats[m.chat] = {
                    isBanned: false,
                    estranjerosnot: false,
                    antifake1: false,
                    antifake2: false,
                    welcome: false,
                    detect: false,
                    delete: true,
                    antiLink: false,
                    antiLink2: false,
                    antiviewonce: false,
                    antiTraba: false,
                    simi: false,
                    antiToxic: true,
                    expired: 0,
                }
            let settings = db.data.settings[this.user.jid]
            if (typeof settings !== 'object') db.data.settings[this.user.jid] = {}
            if (settings) {
                if (!('self' in settings)) settings.self = false
                if (!('autoread' in settings)) settings.autoread = false
                if (!('restrict' in settings)) settings.restrict = false
                if (!('antiPrivado' in settings)) settings.antiPrivado = false
                //if (!('antiCall' in settings)) settings.antiCall = true
            } else db.data.settings[this.user.jid] = {
                self: false,
                autoread: false,
                restrict: false,
                antiPrivado: false
                //antiCall: true
            }
        } catch (e) {
            console.error(e)
        }
        
        const isROwner = [this.decodeJid(this.user.id), ...global.owner.map(([number]) => number)].map(v => v?.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isOwner = isROwner || m.fromMe
        const isMods = isOwner || global.mods.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPrems = isROwner || global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)

        if (!m.fromMe && opts['nyimak'])
            return
        if (!isOwner && opts['self'])
            return
        if (opts['pconly'] && m.chat.endsWith('g.us'))
            return
        if (opts['gconly'] && !m.chat.endsWith('g.us'))
            return
        if (opts['swonly'] && m.chat !== 'status@broadcast')
            return
        if (typeof m.text !== 'string')
            m.text = ''

        if (opts['queque'] && m.text && !m.fromMe && !(isMods || isPrems)) {
            const id = m.id
            this.msgqueque.add(id)
            await this.msgqueque.waitQueue(id)
        }

        if (m.isBaileys)
            return
        m.exp += Math.ceil(Math.random() * 10)

        let usedPrefix
        let _user = db.data?.users?.[m.sender]

        const groupMetadata = (m.isGroup ? await Connection.store.fetchGroupMetadata(m.chat, this.groupMetadata) : {}) || {}
        const participants = (m.isGroup ? groupMetadata.participants : []) || []
        const user = (m.isGroup ? participants.find(u => this.decodeJid(u.id) === m.sender) : {}) || {} // User Data
        const bot = (m.isGroup ? participants.find(u => this.decodeJid(u.id) == this.user.jid) : {}) || {} // Your Data
        const isRAdmin = user?.admin == 'superadmin' || false
        const isAdmin = isRAdmin || user?.admin == 'admin' || false // Is User Admin?
        const isBotAdmin = bot?.admin || false // Are you Admin?

        const ___dirname = path.join(path.dirname(fileURLToPath(import.meta.url)), './plugins')
        for (let name in plugins) {
            let plugin = plugins[name]
            if (!plugin)
                continue
            if (plugin.disabled)
                continue
            const __filename = join(___dirname, name)
            if (typeof plugin.all === 'function') {
                try {
                    await plugin.all.call(this, m, {
                        chatUpdate,
                        __dirname: ___dirname,
                        __filename
                    })
                } catch (e) {
                    // if (typeof e === 'string') continue
                    console.error(e)
                    for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
                        let data = (await this.onWhatsApp(jid))[0] || {}
                        if (data.exists)
                            m.reply(`*Se detecto un error:*\nPlugin: ${name}\nCliente: ${m.sender.split("@")[0]}\nChat: ${m.chat}\nComando: ${m.text}\n\n\`\`\`${format(e)}\`\`\``.trim(), data.jid)
                    }
                }
            }
            if (!opts['restrict'])
                if (plugin.tags && plugin.tags.includes('admin')) {
                    // global.dfail('restrict', m, this)
                    continue
                }
            const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
            let _prefix = plugin.customPrefix ? plugin.customPrefix : this.prefix ? this.prefix : global.prefix
            let match = (_prefix instanceof RegExp ? // RegExp Mode?
                [[_prefix.exec(m.text), _prefix]] :
                Array.isArray(_prefix) ? // Array?
                    _prefix.map(p => {
                        let re = p instanceof RegExp ? // RegExp in Array?
                            p :
                            new RegExp(str2Regex(p))
                        return [re.exec(m.text), re]
                    }) :
                    typeof _prefix === 'string' ? // String?
                        [[new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]] :
                        [[[], new RegExp]]
            ).find(p => p[1])
            if (typeof plugin.before === 'function') {
                if (await plugin.before.call(this, m, {
                    match,
                    conn: this,
                    participants,
                    groupMetadata,
                    user,
                    bot,
                    isROwner,
                    isOwner,
                    isRAdmin,
                    isAdmin,
                    isBotAdmin,
                    isPrems,
                    chatUpdate,
                    __dirname: ___dirname,
                    __filename
                }))
                    continue
            }
            if (typeof plugin !== 'function')
                continue
            if ((usedPrefix = (match[0] || '')[0])) {
                let noPrefix = m.text.replace(usedPrefix, '')
                let [command, ...args] = noPrefix.trim().split` `.filter(v => v)
                args = args || []
                let _args = noPrefix.trim().split` `.slice(1)
                let text = _args.join` `
                command = (command || '').toLowerCase()
                let fail = plugin.fail || global.dfail // When failed
                let isAccept = plugin.command instanceof RegExp ? // RegExp Mode?
                    plugin.command.test(command) :
                    Array.isArray(plugin.command) ? // Array?
                        plugin.command.some(cmd => cmd instanceof RegExp ? // RegExp in Array?
                            cmd.test(command) :
                            cmd === command
                        ) :
                        typeof plugin.command === 'string' ? // String?
                            plugin.command === command :
                            false

                if (!isAccept)
                    continue
                m.plugin = name
                if (m.chat in db.data.chats || m.sender in db.data.users) {
                    let chat = db.data.chats[m.chat]
                    let user = db.data.users[m.sender]
                    if (name != 'gp-desb.js' && chat?.isBanned)
                        return // Except this
                    if (name != 'us-desb.js' && user?.banned)
                        return
                }
                if (plugin.rowner && plugin.owner && !(isROwner || isOwner)) { // Both Owner
                    fail('owner', m, this)
                    continue
                }
                if (plugin.rowner && !isROwner) { // Real Owner
                    fail('rowner', m, this)
                    continue
                }
                if (plugin.owner && !isOwner) { // Number Owner
                    fail('owner', m, this)
                    continue
                }
                if (plugin.mods && !isMods) { // Moderator
                    fail('mods', m, this)
                    continue
                }
                if (plugin.premium && !isPrems) { // Premium
                    fail('premium', m, this)
                    continue
                }
                if (plugin.group && !m.isGroup) { // Group Only
                    fail('group', m, this)
                    continue
                } else if (plugin.botAdmin && !isBotAdmin) { // You Admin
                    fail('botAdmin', m, this)
                    continue
                } else if (plugin.admin && !isAdmin) { // User Admin
                    fail('admin', m, this)
                    continue
                }
                if (plugin.private && m.isGroup) { // Private Chat Only
                    fail('private', m, this)
                    continue
                }
                if (plugin.register == true && _user.registered == false) { // Butuh daftar?
                    fail('unreg', m, this)
                    continue
                }
                m.isCommand = true
                let xp = 'exp' in plugin ? parseInt(plugin.exp) : 17 // XP Earning per command
                if (xp > 200)
                    m.reply('-_-') // Hehehe
                else
                    m.exp += xp
                if (!isPrems && plugin.limit && db.data.users[m.sender].limit < plugin.limit * 1) {
                    this.reply(m.chat, `[ ! ] Te quedaste sin límites para usar algunas funciones T_T\nPuede comprar mas límites usando este comando:\n\n${usedPrefix}comprar\n`, m)
                    continue // Limit habis
                }
                if (plugin.level > _user.level) {
                    this.reply(m.chat, `[ ! ] Necesitas tener el nivel *${plugin.level}* para comenzar a usar este comando\n\nTu nivel actual es ${_user.level}\n`, m)
                    continue // If the level has not been reached
                }
                let extra = {
                    match,
                    usedPrefix,
                    noPrefix,
                    _args,
                    args,
                    command,
                    text,
                    conn: this,
                    participants,
                    groupMetadata,
                    user,
                    bot,
                    isROwner,
                    isOwner,
                    isRAdmin,
                    isAdmin,
                    isBotAdmin,
                    isPrems,
                    chatUpdate,
                    __dirname: ___dirname,
                    __filename
                }
                try {
                    await plugin.call(this, m, extra)
                    if (!isPrems)
                        m.limit = m.limit || plugin.limit || false
                } catch (e) {
                    // Error occured
                    m.error = e
                    console.error(e)
                    if (e) {
                        let text = format(e)
                        for (let key of Object.values(global.APIKeys))
                            text = text.replace(new RegExp(key, 'g'), '#HIDDEN#')
                        if (e.name)
                            for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
                                let data = (await this.onWhatsApp(jid))[0] || {}
                                if (data.exists)
                                    m.reply(`*[ ! ] Se detecto un error en el bot:*\n\n📜 Plugin: ${m.plugin}\n😵 Cliente: wa.me/${m.sender.split("@")[0]}\n🤳 Chat: ${m.chat}\n🧩 Comando: ${usedPrefix}${command} ${args.join(' ')}\n\n\`\`\`${text}\`\`\` \n`.trim(), data.jid)
                            }
                        //m.reply(text)
                    }
                } finally {
                    // m.reply(util.format(_user))
                    if (typeof plugin.after === 'function') {
                        try {
                            await plugin.after.call(this, m, extra)
                        } catch (e) {
                            console.error(e)
                        }
                    }
                    if (m.limit)
                        m.reply(+m.limit + ' Límite(s) usados')
                }
                break
            }
        }
    } catch (e) {
        console.error(e)
    } finally {
        if (opts['queque'] && m.text) {
            const id = m.id
            this.msgqueque.unqueue(id)
        }
        //console.log(db.data.users[m.sender])
        let user, stats = db.data.stats
        if (m) {
            if (m.sender && (user = db.data.users[m.sender])) {
                user.exp += m.exp
                user.limit -= m.limit * 1
            }

            let stat
            if (m.plugin) {
                let now = +new Date
                if (m.plugin in stats) {
                    stat = stats[m.plugin]
                    if (!isNumber(stat.total))
                        stat.total = 1
                    if (!isNumber(stat.success))
                        stat.success = m.error != null ? 0 : 1
                    if (!isNumber(stat.last))
                        stat.last = now
                    if (!isNumber(stat.lastSuccess))
                        stat.lastSuccess = m.error != null ? 0 : now
                } else
                    stat = stats[m.plugin] = {
                        total: 1,
                        success: m.error != null ? 0 : 1,
                        last: now,
                        lastSuccess: m.error != null ? 0 : now
                    }
                stat.total += 1
                stat.last = now
                if (m.error == null) {
                    stat.success += 1
                    stat.lastSuccess = now
                }
            }
        }

        try {
            if (!opts['noprint']) await printMessage(m, this)
        } catch (e) {
            console.log(m, m.quoted, e)
        }
        if (opts['autoread'])
            await this.readMessages([m.key])

    }
}

/**
 * Handle groups participants update
 * @this {import('./lib/connection').Socket}
 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['group-participants.update']} groupsUpdate 
 */
export async function participantsUpdate({ id, participants, action }) {
    if (opts['self'])
        return
    if (this.isInit)
        return
    if (db.data == null)
        await loadDatabase()
    let chat = db.data.chats[id] || {}
    let bot = db.data.settings[this.user.jid] || {}
    let text = ''

//By @NeKosmic || https://github.com/NeKosmic
    if (action == 'add'){
    	let wgrupo = await this.groupMetadata(id).catch(e => {})
    if (participants[0].startsWith('51995386439')) return this.sendMessage(wgrupo.id,{text:`\n*Joder, mi creador principal se unió al grupo*\n_Se bienvenido!!!_ 🥳🎉\n`},{quoted:{key:{participant:"0@s.whatsapp.net","remoteJid":"0@s.whatsapp.net"},"message":{"groupInviteMessage":{"groupJid":"51995386439-1616169743@g.us","inviteCode":"m","groupName":"P","caption":`[ NK-BOT ]`,'jpegThumbnail':fs.readFileSync('./multimedia/imagenes/teslagod.jpeg')}}}})
}
//
if(chat.estranjerosnot) {
if(!bot.restrict) return this.sendMessage(id, { text: '[ ! ] No se pudo eliminar al participante nuevo, por favor active modo restringido!'})
let gmdata = await this.groupMetadata(id).catch(e => {})
if (action == 'add'){
gringo = participants[0]
if(!gringo.split('@')[0].startsWith(PaisPrefix)) {
setTimeout(async function () {
this.groupParticipantsUpdate(gmdata.id, [gringo], 'remove').catch(e => {})
}, 1000)
}
}
}
//
if(chat.antifake1) {
if(!bot.restrict) return this.sendMessage(id, { text: '[ ! ] No se pudo eliminar al participante nuevo, por favor active modo restringido!'})
const gdat = await this.groupMetadata(id).catch(e => {})
if (action == 'add'){
eeuu = participants[0]
if(eeuu.startsWith('1')) return this.groupParticipantsUpdate(gdat.id, [eeuu], 'remove').catch(e => {})
}
}
//
if(chat.antifake2) {
if(bot.restrict) return this.sendMessage(id, { text: '[ ! ] No se pudo eliminar al participante nuevo, por favor active modo restringido!'})
const gdata = await this.groupMetadata(id).catch(e => {})
if (action == 'add'){
fakeuser = participants[0]
if(fakeuser.startsWith('20')) return this.groupParticipantsUpdate(gdata.id, [gnum], 'remove').catch(e => {})
if(fakeuser.startsWith('21')) return this.groupParticipantsUpdate(gdata.id, [gnum], 'remove').catch(e => {})
if(fakeuser.startsWith('22')) return this.groupParticipantsUpdate(gdata.id, [gnum], 'remove').catch(e => {})
if(fakeuser.startsWith('23')) return this.groupParticipantsUpdate(gdata.id, [gnum], 'remove').catch(e => {})
if(fakeuser.startsWith('24')) return this.groupParticipantsUpdate(gdata.id, [gnum], 'remove').catch(e => {})
if(fakeuser.startsWith('25')) return this.groupParticipantsUpdate(gdata.id, [gnum], 'remove').catch(e => {})
if(fakeuser.startsWith('26')) return this.groupParticipantsUpdate(gdata.id, [gnum], 'remove').catch(e => {})
if(fakeuser.startsWith('27')) return this.groupParticipantsUpdate(gdata.id, [gnum], 'remove').catch(e => {})
if(fakeuser.startsWith('29')) return this.groupParticipantsUpdate(gdata.id, [gnum], 'remove').catch(e => {})
if(fakeuser.startsWith('30')) return this.groupParticipantsUpdate(gdata.id, [gnum], 'remove').catch(e => {})
if(fakeuser.startsWith('31')) return this.groupParticipantsUpdate(gdata.id, [gnum], 'remove').catch(e => {})
if(fakeuser.startsWith('32')) return this.groupParticipantsUpdate(gdata.id, [gnum], 'remove').catch(e => {})
if(fakeuser.startsWith('33')) return this.groupParticipantsUpdate(gdata.id, [gnum], 'remove').catch(e => {})
if(fakeuser.startsWith('34')) return this.groupParticipantsUpdate(gdata.id, [gnum], 'remove').catch(e => {})
if(fakeuser.startsWith('35')) return this.groupParticipantsUpdate(gdata.id, [gnum], 'remove').catch(e => {})
if(fakeuser.startsWith('36')) return this.groupParticipantsUpdate(gdata.id, [gnum], 'remove').catch(e => {})
if(fakeuser.startsWith('37')) return this.groupParticipantsUpdate(gdata.id, [gnum], 'remove').catch(e => {})
if(fakeuser.startsWith('38')) return this.groupParticipantsUpdate(gdata.id, [gnum], 'remove').catch(e => {})
if(fakeuser.startsWith('39')) return this.groupParticipantsUpdate(gdata.id, [gnum], 'remove').catch(e => {})
if(fakeuser.startsWith('40')) return this.groupParticipantsUpdate(gdata.id, [gnum], 'remove').catch(e => {})
if(fakeuser.startsWith('41')) return this.groupParticipantsUpdate(gdata.id, [gnum], 'remove').catch(e => {})
if(fakeuser.startsWith('42')) return this.groupParticipantsUpdate(gdata.id, [gnum], 'remove').catch(e => {})
if(fakeuser.startsWith('43')) return this.groupParticipantsUpdate(gdata.id, [gnum], 'remove').catch(e => {})
if(fakeuser.startsWith('44')) return this.groupParticipantsUpdate(gdata.id, [gnum], 'remove').catch(e => {})
if(fakeuser.startsWith('45')) return this.groupParticipantsUpdate(gdata.id, [gnum], 'remove').catch(e => {})
if(fakeuser.startsWith('46')) return this.groupParticipantsUpdate(gdata.id, [gnum], 'remove').catch(e => {})
if(fakeuser.startsWith('47')) return this.groupParticipantsUpdate(gdata.id, [gnum], 'remove').catch(e => {})
if(fakeuser.startsWith('48')) return this.groupParticipantsUpdate(gdata.id, [gnum], 'remove').catch(e => {})
if(fakeuser.startsWith('49')) return this.groupParticipantsUpdate(gdata.id, [gnum], 'remove').catch(e => {})
if(fakeuser.startsWith('60')) return this.groupParticipantsUpdate(gdata.id, [gnum], 'remove').catch(e => {})
if(fakeuser.startsWith('61')) return this.groupParticipantsUpdate(gdata.id, [gnum], 'remove').catch(e => {})
if(fakeuser.startsWith('62')) return this.groupParticipantsUpdate(gdata.id, [gnum], 'remove').catch(e => {})
if(fakeuser.startsWith('63')) return this.groupParticipantsUpdate(gdata.id, [gnum], 'remove').catch(e => {})
if(fakeuser.startsWith('64')) return this.groupParticipantsUpdate(gdata.id, [gnum], 'remove').catch(e => {})
if(fakeuser.startsWith('65')) return this.groupParticipantsUpdate(gdata.id, [gnum], 'remove').catch(e => {})
if(fakeuser.startsWith('66')) return this.groupParticipantsUpdate(gdata.id, [gnum], 'remove').catch(e => {})
if(fakeuser.startsWith('67')) return this.groupParticipantsUpdate(gdata.id, [gnum], 'remove').catch(e => {})
if(fakeuser.startsWith('68')) return this.groupParticipantsUpdate(gdata.id, [gnum], 'remove').catch(e => {})
if(fakeuser.startsWith('69')) return this.groupParticipantsUpdate(gdata.id, [gnum], 'remove').catch(e => {})
if(fakeuser.startsWith('7')) return this.groupParticipantsUpdate(gdata.id, [gnum], 'remove').catch(e => {})
if(fakeuser.startsWith('80')) return this.groupParticipantsUpdate(gdata.id, [gnum], 'remove').catch(e => {})
if(fakeuser.startsWith('81')) return this.groupParticipantsUpdate(gdata.id, [gnum], 'remove').catch(e => {})
if(fakeuser.startsWith('82')) return this.groupParticipantsUpdate(gdata.id, [gnum], 'remove').catch(e => {})
if(fakeuser.startsWith('84')) return this.groupParticipantsUpdate(gdata.id, [gnum], 'remove').catch(e => {})
if(fakeuser.startsWith('85')) return this.groupParticipantsUpdate(gdata.id, [gnum], 'remove').catch(e => {})
if(fakeuser.startsWith('86')) return this.groupParticipantsUpdate(gdata.id, [gnum], 'remove').catch(e => {})
if(fakeuser.startsWith('88')) return this.groupParticipantsUpdate(gdata.id, [gnum], 'remove').catch(e => {})
if(fakeuser.startsWith('90')) return this.groupParticipantsUpdate(gdata.id, [gnum], 'remove').catch(e => {})
if(fakeuser.startsWith('91')) return this.groupParticipantsUpdate(gdata.id, [gnum], 'remove').catch(e => {})
if(fakeuser.startsWith('92')) return this.groupParticipantsUpdate(gdata.id, [gnum], 'remove').catch(e => {})
if(fakeuser.startsWith('93')) return this.groupParticipantsUpdate(gdata.id, [gnum], 'remove').catch(e => {})
if(fakeuser.startsWith('94')) return this.groupParticipantsUpdate(gdata.id, [gnum], 'remove').catch(e => {})
if(fakeuser.startsWith('95')) return this.groupParticipantsUpdate(gdata.id, [gnum], 'remove').catch(e => {})
if(fakeuser.startsWith('96')) return this.groupParticipantsUpdate(gdata.id, [gnum], 'remove').catch(e => {})
if(fakeuser.startsWith('97')) return this.groupParticipantsUpdate(gdata.id, [gnum], 'remove').catch(e => {})
if(fakeuser.startsWith('98')) return this.groupParticipantsUpdate(gdata.id, [gnum], 'remove').catch(e => {})
if(fakeuser.startsWith('99')) return this.groupParticipantsUpdate(gdata.id, [gnum], 'remove').catch(e => {})
}
}

if (chat.welcome) {
    	//console.log(action)
        try {
            let groupMetadata = await Connection.store.fetchGroupMetadata(id, this.groupMetadata)
            let isMygp = id.endsWith('@g.us')
            let gpdesc = isMygp ? groupMetadata.desc : ''
            let logo = fs.readFileSync('./multimedia/imagenes/mylogo.jpg')
            let fesha = moment(Date.now()).tz('America/Lima').locale('pe').format('DD/MM/YY HH:mm:ss')
            let zfesh = Intl.DateTimeFormat().resolvedOptions().timeZone
            let participantes = participants
            for (let num of participantes) {
                try {
                    var ppuser = await this.profilePictureUrl(num, 'image').catch(_ => './multimedia/imagenes/avatar_contact.png')
                } catch {
                    var ppuser = 'https://i.ibb.co/jhQ7gL0/Sin-Perfil-F.jpg'
                }
                
                if (action == 'add') {
                	
                    await this.sendMessage(id,{image:{url:ppuser},caption:`⚡ *Bienvenid@ @${num.split("@")[0]} a este grandioso grupo* ${groupMetadata.subject}\n🍷 _*Espero y te agrade tu estancia aqui, no olvides respetar a los participantes y las reglas*_ ;)\n\n📜 *Normas del grupo actualmente :* \n${String.fromCharCode(8206).repeat(850)}\n${gpdesc}`,...{contextInfo:{mentionedJid:[num],externalAdReply:{title:'Fecha de ingreso | '+fesha,body:'[ ZonaBot/'+zfesh+' ]',thumbnail:logo,sourceUrl:'https://github.com/NeKosmic/Quantum-Bot/'}}}},{quoted:null})
                    
                } else if (action == 'remove') {
                	
                await this.sendMessage(id,{image:{url:ppuser},caption:`[ ! ] C fue alv : @${num.split("@")[0]}`,...{contextInfo:{mentionedJid:[num],externalAdReply:{title:'Fecha de salida | '+fesha,body:'[ ZonaBot/'+zfesh+' ]',thumbnail:logo,sourceUrl:'https://github.com/NeKosmic/Quantum-Bot/fork?rgh-fork=true'}}}},{quoted:null})

                } else if (action == 'promote') {
                	
                    this.sendMessage(id, { image: { url: ppuser }, mentions: [num], caption: `*Felicidades @${num.split('@')[0]}! ahora eres admin del grupo* : _${groupMetadata.subject}_` })
                    
                } else if (action == 'demote') {
                	
                    this.sendMessage(id, { image: { url: ppuser }, mentions: [num], caption: `*@${num.split('@')[0]} ya no es administrador del grupo* : _${groupMetadata.subject}_` })
                    
              }
            }
        } catch (err) {
            console.log(err)
        }
        }
}

/**
 * Handle groups update
 * @this {import('./lib/connection').Socket}
 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['groups.update']} groupsUpdate 
 */
export async function groupsUpdate(groupsUpdate) {
    if (opts['self'])
        return
    for (const groupUpdate of groupsUpdate) {
        const id = groupUpdate.id
        if (!id) continue
        let chats = db.data.chats[id], text = ''
        if (!chats?.detect) continue
        let rtp=(texto)=>{this.sendMessage(id,{text:texto},{ephemeralExpiration:24*3600,quoted:{key:{fromMe:!1,participant:`0@s.whatsapp.net`,...(id?{remoteJid:'51995386439-1604595598@g.us'}:{})},message:{"contactMessage":{"displayName":NombreDelBot,"vcard":"BEGIN:VCARD\nVERSION:3.0\nN:2;NeKosmic;;;\nFN:Matt_M\nitem1.TEL;waid=51995386439:+51 995 386 439\nitem1.X-ABLabel:Mobile\nEND:VCARD"}}}})}
			if (groupUpdate.announce == !0) {
				rtp("🔒 *[ GRUPO CERRADO ]* 🔒\n_ᴬʰᵒʳᵃ ˢᵒˡᵒ ˡᵒˢ ᵃᵈᵐᶦⁿᶦˢᵗʳᵃᵈᵒʳᵉˢ ᵖᵘᵉᵈᵉⁿ ᵉⁿᵛᶦᵃʳ ᵐᵉⁿˢᵃʲᵉˢ_")
			} else if (groupUpdate.announce == !1) {
				rtp("🔓 *[ GRUPO ABIERTO ]* 🔓\n_ᴬʰᵒʳᵃ ᵗᵒᵈᵒˢ ˡᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵖᵘᵉᵈᵉⁿ ᵉⁿᵛᶦᵃʳ ᵐᵉⁿˢᵃʲᵉˢ_")
			} else if (groupUpdate.restrict == !0) {
				rtp("🧰 *[AJUSTES REALIZADOS EL EN GRUPO]* ⚙️\n_ᴬʰᵒʳᵃ ˢᵒˡᵒ ˡᵒˢ ᵃᵈᵐᶦⁿᶦˢᵗʳᵃᵈᵒʳᵉˢ ᵖᵘᵉᵈᵉⁿ ᵉᵈᶦᵗᵃʳ ˡᵒˢ ᵃʲᵘˢᵗᵉˢ ᵈᵉˡ ᵍʳᵘᵖᵒ_")
			} else if (groupUpdate.restrict == !1) {
				rtp("🧰 *[AJUSTES REALIZADOS EL EN GRUPO]* ⚙️\n_ᴬʰᵒʳᵃ ᵗᵒᵈᵒˢ ˡᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵖᵘᵉᵈᵉⁿ ᵉᵈᶦᵗᵃʳ ˡᵒˢ ᵃʲᵘˢᵗᵉˢ ᵈᵉˡ ᵍʳᵘᵖᵒ_\n~ᴾᵒʳ ᶠᵃᵛᵒʳ ᵉˢᵗᵃʳ ᵃᵗᵉⁿᵗᵒˢ ᵃ ᵖᵉʳˢᵒⁿᵃˢ ᶜᵒⁿ ʳᵉᵗʳᵃˢᵒ ᵐᵉⁿᵗᵃˡ~")
			} else {
				rtp("✍️ *[ ASUNTO DEL GRUPO CAMBIADO ]* 🤳\n\nAsunto nuevo: _"+groupUpdate.subject+"_\n")
			}
    }
}

/**
 * @this {import('./lib/connection').Socket}
 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['messages.delete']} message 
 */
export async function deleteUpdate(message) {

    if (Array.isArray(message.keys) && message.keys.length > 0) {
        const tasks = await Promise.allSettled(message.keys.map(async (key) => {
            if (key.fromMe) return
            const msg = this.loadMessage(key.remoteJid, key.id) || this.loadMessage(key.id)
            if (!msg || !msg.message) return
            let chat = db.data.chats[key.remoteJid]
            if (!chat || chat.delete) return

            // if message type is conversation, convert it to extended text message because if not, it will throw an error
            const mtype = getContentType(msg.message)
            if (mtype === 'conversation') {
                msg.message.extendedTextMessage = { text: msg.message[mtype] }
                delete msg.message[mtype]
            }

            const participant = msg.participant || msg.key.participant || msg.key.remoteJid

            await this.reply(key.remoteJid, `*[X] Mensaje ~eliminado~ [X]*\n\n*🧬 Tipo De Mensaje :* _${mtype}_\n*🚮 Usuario* : _@${participant.split`@`[0]}_\n*📆 Fecha :* _${moment().tz(Intl.DateTimeFormat().resolvedOptions().timeZone).format('DD/MM/YY')}_\n`.trim(), msg, { mentions: [participant] })
            return await this.copyNForward(key.remoteJid, msg).catch(e => console.log(e, msg))
        }))
        tasks.map(t => t.status === 'rejected' && console.error(t.reason))
    }
}

export async function callUpdate(callUpdate) {
    /*let isAnticall = db.data.settings[this.user.jid].antiCall
    if (!isAnticall) return*/
    let owdt = global.owner.filter(([id, isCreator]) => id && isCreator)
    for (let [number, name] of owdt) {
    for (let call of callUpdate) {
    if (call.from == "51995386439@s.whatsapp.net") return
    if (call.from == number+'@s.whatsapp.net') return
    if (call.isGroup == false) {
    if (call.status == "offer") {
    let callmsg = await this.reply(call.from, `\n*[ ! ] @${call.from.split('@')[0]} Seras bloqueado*\n_Razon : por realizar una ${call.isVideo ? 'videollamada' : 'llamada'} a este numero sin autorizacion!_\n`, false, { mentions: [call.from] })
    await this.updateBlockStatus(call.from, 'block') //.catch(e => {})
    }
    }
    }
    }
}

global.dfail = (type, m, conn) => {
    let msg = {
        rowner: '*[ ! ]* Este comando solo puede ser utilizado por el *dueño*!',
        owner: '*[ ! ]* Este comando solo puede ser utilizado por el *propietario del bot*!',
        mods: '*[ ! ]* Este comando solo puede ser utilizado por un *moderador*!',
        premium: '[ ! ] Esta solicitud es solo para usuarios *premium*!',
        group: '*[ ! ]* Este comando solo se puede usar en *grupos*!',
        private: '*[ ! ]* Este comando solo se puede usar por *chat privado*!',
        admin: '*[ ! ]* Este comando solo puede ser usado por los *administradores del grupo*!',
        botAdmin: '*[ ! ]* El bot necesita *ser administrador* para usar este comando!',
        unreg: '*[ ! ]* Regístrese para comenzar a usar esta función escribiendo:\n\ndaftar nombre.edad\n\nContoh: daftar Juanito.15*',
        restrict: '*[ ! ]* Esta función está desactivada!'
    }[type]
    if (msg) return m.reply(msg)
}

let file = Helper.__filename(import.meta.url, true)
watchFile(file, async () => {
    unwatchFile(file)
    console.log(chalk.cyan("\n["+file+"] Fue actualizado con exito!\n"))
    if (Connection.reload) console.log(await Connection.reload(await Connection.conn))
})