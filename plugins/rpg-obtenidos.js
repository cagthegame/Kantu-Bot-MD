//Codígo creado por David Chian wa.me/5351524614
const _0x195985=_0x3ed9;(function(_0x437874,_0x23e8a8){const _0x129190=_0x3ed9,_0x371d84=_0x437874();while(!![]){try{const _0x212af0=-parseInt(_0x129190(0x192))/0x1+-parseInt(_0x129190(0x19d))/0x2*(-parseInt(_0x129190(0x194))/0x3)+parseInt(_0x129190(0x174))/0x4*(parseInt(_0x129190(0x190))/0x5)+-parseInt(_0x129190(0x17a))/0x6+parseInt(_0x129190(0x170))/0x7+-parseInt(_0x129190(0x193))/0x8*(-parseInt(_0x129190(0x16e))/0x9)+-parseInt(_0x129190(0x184))/0xa*(parseInt(_0x129190(0x1a6))/0xb);if(_0x212af0===_0x23e8a8)break;else _0x371d84['push'](_0x371d84['shift']());}catch(_0x3165a1){_0x371d84['push'](_0x371d84['shift']());}}}(_0x21b3,0x34ec1));import _0x5a08 from'fs';import{prepareWAMessageMedia,generateWAMessageFromContent,getDevice}from'@whiskeysockets/baileys';import _0x40d404 from'dotenv';_0x40d404[_0x195985(0x172)]();const SECRET_KEY=process['env'][_0x195985(0x175)],obtenerDatos=()=>{const _0x5675e2=_0x195985;return _0x5a08['existsSync'](_0x5675e2(0x199))?JSON[_0x5675e2(0x195)](_0x5a08[_0x5675e2(0x19c)](_0x5675e2(0x199),_0x5675e2(0x16f))):{'usuarios':{},'personajesReservados':[]};},obtenerPersonajes=()=>{const _0x1e3934=_0x195985;return _0x5a08['existsSync'](_0x1e3934(0x187))?JSON[_0x1e3934(0x195)](_0x5a08[_0x1e3934(0x19c)](_0x1e3934(0x187),_0x1e3934(0x16f))):[];},contarTotalPersonajes=()=>{const _0x1e1df2=_0x195985;if(_0x5a08[_0x1e1df2(0x183)]('./src/JSON/characters.json')){const _0x59aa52=_0x5a08['readFileSync'](_0x1e1df2(0x187),_0x1e1df2(0x16f))[_0x1e1df2(0x171)]('\x0a');return _0x59aa52[_0x1e1df2(0x182)]-0x2;}else return 0x0;};function _0x21b3(){const _0x1f6fba=['2876048nFZLdl','189aPNNMr','parse','Error\x20al\x20leer\x20package.json:','\x20𝑊𝐹\x20♡\x0a┊𝙏𝙤𝙩𝙖𝙡\x20𝙙𝙚\x20𝙒𝙁𝙘𝙤𝙞𝙣𝙨:\x0a│\x20','\x20de\x20','data.json','jid','register','readFileSync','2694mYVveJ','usuarios','repository','map','character\x20','\x20en\x20total.\x0a╰──────┄\x20♢\x20┄──────','obtenido','*No\x20tienes\x20ningún\x20objeto\x20en\x20tu\x20inventario\x20😹🫵!*','🚩\x20Este\x20comando\x20solo\x20está\x20disponible\x20para\x20AI\x20Yaemori.\x0a\x20🌟\x20https://github.com/OfcDiego/YaemoriBot-MD','1705ROMIwv','help','user','has','9NYgPbn','utf-8','1758211azsGkp','split','config','values','583108zvEGPH','SECRET_KEY','Personaje\x20','Personajes\x20Obtenidos','forEach','key','1084716BWkRMB','command','Lista\x20de\x20Personajes','Tus\x20Personajes','reply','error','add','name','length','existsSync','27070IEzdgw','chat','\x0a┊𝙋𝙤𝙧𝙘𝙚𝙣𝙩𝙖𝙟𝙚:\x0a⎆\x20','./src/JSON/characters.json','fun','%\x0a┊𝙋𝙚𝙧𝙨𝙤𝙣𝙖𝙟𝙚𝙨\x20𝙙𝙞𝙨𝙥𝙤𝙣𝙞𝙗𝙡𝙚𝙨:\x0a⎆\x20','obtenidos','toFixed','characters','╭──────┄\x20♡\x20┄──────\x0a│╽𝑻.𝑼\x20𝑰.𝑵.𝑽.𝑬.𝑵.𝑻.𝑨.𝑹.𝑰.𝑶╽\x0a┊𝙋𝙚𝙧𝙨𝙤𝙣𝙖𝙟𝙚𝙨:\x0a⎆\x20','web','desktop','5sxGTtm','sender','24177VXODmZ'];_0x21b3=function(){return _0x1f6fba;};return _0x21b3();}function _0x3ed9(_0x568989,_0x522cc1){const _0x21b367=_0x21b3();return _0x3ed9=function(_0x3ed9cd,_0x14c10c){_0x3ed9cd=_0x3ed9cd-0x16e;let _0x4f9e2a=_0x21b367[_0x3ed9cd];return _0x4f9e2a;},_0x3ed9(_0x568989,_0x522cc1);}let handler=async(_0x50a48a,{conn:_0x5c677d,usedPrefix:_0x2428e9})=>{const _0x57aba1=_0x195985,_0x49e788=_0x50a48a[_0x57aba1(0x191)];let _0x55a9b1=obtenerDatos(),_0x11f133=obtenerPersonajes(),_0x32d8b0=contarTotalPersonajes();if(!_0x55a9b1[_0x57aba1(0x19e)]||!(_0x49e788 in _0x55a9b1[_0x57aba1(0x19e)])||_0x55a9b1[_0x57aba1(0x19e)][_0x49e788][_0x57aba1(0x18c)][_0x57aba1(0x182)]===0x0){_0x5c677d[_0x57aba1(0x17e)](_0x50a48a['chat'],_0x57aba1(0x1a4),_0x50a48a,rcanal);return;}const _0x3b9ff=()=>{const _0x5a9239=_0x57aba1;try{const _0x25a324=JSON[_0x5a9239(0x195)](_0x5a08[_0x5a9239(0x19c)]('./package.json',_0x5a9239(0x16f)));if(_0x25a324[_0x5a9239(0x181)]!=='YaemoriBot-MD')return![];if(_0x25a324[_0x5a9239(0x19f)]['url']!=='git+https://github.com/OfcDiego/YaemoriBot-MD.git')return![];if(SECRET_KEY!=='38firllSk43U4k')return![];return!![];}catch(_0x444a48){return console[_0x5a9239(0x17f)](_0x5a9239(0x196),_0x444a48),![];}};if(!_0x3b9ff()){await _0x5c677d[_0x57aba1(0x17e)](_0x50a48a[_0x57aba1(0x185)],_0x57aba1(0x1a5),_0x50a48a,rcanal);return;}const {characters:_0x75d2ca,totalRwcoins:_0x1b3a98}=_0x55a9b1[_0x57aba1(0x19e)][_0x49e788],_0x51d7d2=_0x75d2ca['length'];let _0x4658c2=new Set();Object[_0x57aba1(0x173)](_0x55a9b1['usuarios'])[_0x57aba1(0x178)](_0x2d7194=>{const _0x2ef580=_0x57aba1;_0x2d7194[_0x2ef580(0x18c)][_0x2ef580(0x178)](_0x506f5b=>_0x4658c2[_0x2ef580(0x180)](_0x506f5b));});let _0x60b7ad=_0x11f133['filter'](_0x5e28e4=>!_0x4658c2[_0x57aba1(0x1a9)](_0x5e28e4['name'])),_0x3f41b8=_0x60b7ad[_0x57aba1(0x182)];const _0x39f8c6=_0x57aba1(0x18d)+_0x51d7d2+_0x57aba1(0x197)+_0x1b3a98+_0x57aba1(0x186)+(_0x51d7d2/_0x32d8b0*0x64)[_0x57aba1(0x18b)](0x2)+_0x57aba1(0x189)+_0x3f41b8+_0x57aba1(0x198)+_0x32d8b0+_0x57aba1(0x1a2);let _0x3e5407=_0x75d2ca[_0x57aba1(0x1a0)]((_0xdff7f9,_0x1adfba)=>({'header':_0xdff7f9,'title':_0x57aba1(0x176)+(_0x1adfba+0x1),'description':'Selecciona\x20para\x20ver\x20la\x20imagen\x20de\x20'+_0xdff7f9,'id':_0x2428e9+_0x57aba1(0x1a1)+_0xdff7f9}));const _0x20e994=await getDevice(_0x50a48a[_0x57aba1(0x179)]['id']);if(_0x20e994!==_0x57aba1(0x18f)&&_0x20e994!==_0x57aba1(0x18e)){const _0x4149e1={'body':{'text':_0x39f8c6},'footer':{'text':_0x57aba1(0x177)},'nativeFlowMessage':{'buttons':[{'name':'single_select','buttonParamsJson':JSON['stringify']({'title':_0x57aba1(0x17d),'sections':[{'title':_0x57aba1(0x17c),'rows':_0x3e5407}]})}],'messageParamsJson':''}};let _0x3c5610=generateWAMessageFromContent(_0x50a48a[_0x57aba1(0x185)],{'viewOnceMessage':{'message':{'interactiveMessage':_0x4149e1}}},{'userJid':_0x5c677d[_0x57aba1(0x1a8)][_0x57aba1(0x19a)],'quoted':_0x50a48a});_0x5c677d['relayMessage'](_0x50a48a[_0x57aba1(0x185)],_0x3c5610['message'],{'messageId':_0x3c5610['key']['id']});}else _0x5c677d[_0x57aba1(0x17e)](_0x50a48a['chat'],_0x39f8c6,_0x50a48a);};handler[_0x195985(0x1a7)]=[_0x195985(0x18a)],handler['tags']=[_0x195985(0x188)],handler[_0x195985(0x17b)]=[_0x195985(0x18a),_0x195985(0x1a3),'ob'],handler[_0x195985(0x19b)]=!![];export default handler;