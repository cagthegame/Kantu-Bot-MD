//Codígo creado por DAVID CHIAN!! PERRAS wa.me/5351524614

import fs from 'fs';
import path from 'path';
import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js';

let handler = async (m, { conn, usedPrefix }) => {
    let who;
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
    else who = m.chat;
    if (!who) throw 'Etiqueta o menciona a alguien';

    let user = global.db.data.users[who];
    let name = conn.getName(who);
    let name2 = conn.getName(m.sender);
    await m.react('🔥');
    let str = `${name2} está haciendo un 69 con ${name}`.trim();
    if (m.isGroup){

    let pp = 'https://telegra.ph/file/bb4341187c893748f912b.mp4' //yaa
    let pp2 = 'https://telegra.ph/file/c7f154b0ce694449a53cc.mp4' //yaa
    let pp3 = 'https://telegra.ph/file/1101c595689f638881327.mp4' //yaa
    let pp4 = 'https://telegra.ph/file/f7f2a23e9c45a5d6bf2a1.mp4' //yaa
    let pp5 = 'https://telegra.ph/file/a2098292896fb05675250.mp4' //yaa
    let pp6 = 'https://telegra.ph/file/16f43effd7357e82c94d3.mp4' //yaa
    let pp7 = 'https://telegra.ph/file/55cb31314b168edd732f8.mp4' //yaa
    let pp8 = 'https://telegra.ph/file/1cbaa4a7a61f1ad18af01.mp4' //yaa
    let pp9 = 'https://telegra.ph/file/1083c19087f6997ec8095.mp4' //yaa
    const videos = [pp, pp2, pp3, pp4, pp5, pp6, pp7, pp8, pp9];
    const video = videos[Math.floor(Math.random() * videos.length)];
    conn.sendMessage(m.chat, { video: { url: video }, gifPlayback: true, caption:str, mentions: [m.sender] },{ quoted: estilo })
    };
   
   // await m.react('🔥');
}

handler.help = ['69 @tag'];
handler.tags = ['fun'];
handler.command = ['sixnine', '69'];
handler.group = true;

export default handler;