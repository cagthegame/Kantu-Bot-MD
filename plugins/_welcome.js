import {WAMessageStubType} from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, {conn, participants, groupMetadata}) {
  if (!m.messageStubType || !m.isGroup) return !0;
  //let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => imagen1)
  //let img = await (await fetch(`${pp}`)).buffer()
  let img = imagen1
  let chat = global.db.data.chats[m.chat]

  if (chat.welcome && m.messageStubType == 27) {
    let welcome = `┌─★ *Luffy Bot - MD* \n│「 Bienvenido 」\n└┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │✑  Bienvenido a\n   │✑  ${groupMetadata.subject}\n   └───────────────┈ ⳹`

await conn.sendLuffy(m.chat, packname, textbot, welcome, img, img, redes)
  }

  if (chat.welcome && m.messageStubType == 28) {
    let bye = `┌─★ *Luffy Bot - MD* \n│「 ADIOS 👋 」\n└┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │✑  Se fue\n   │✑ Jamás te quisimos aquí\n   └───────────────┈ ⳹`
await conn.sendLuffy(m.chat, packname, textbot, bye, img, img, redes)
  }

  if (chat.welcome && m.messageStubType == 32) {
    let kick = `┌─★ *Luffy Bot -MD* \n│「 ADIOS 👋 」\n└┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │✑  Se fue\n   │✑ Jamás te quisimos aquí\n   └───────────────┈ ⳹`
await conn.sendLuffy(m.chat, packname, textbot, kick, img, img, redes)
}}