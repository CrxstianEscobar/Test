import fetch from 'node-fetch';

const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language || global.defaultLenguaje
  const _translate = JSON.parse(fs.readFileSync(`./src/languages/${idioma}.json`))
  const tradutor = _translate.plugins.menu_labiblia

if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `${tradutor.texto1[0]} ${usedPrefix}enable modohorny*`; 
  try {
    const pp = imagen5;
    const vn = './src/assets/audio/01J673V13NHPW7FA028ZPYC18Q.mp3';
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `> ⓘ ¡Hola!, ${taguser}
> ${date}
*˚₊·˚₊· ͟͟͞͞➳❥ _Akane Fayrxz_*
*☆═━┈◈ ╰ 1.4.0 MD ╯ ◈┈━═☆*
*│* 
*╰ ˚₊·˚₊· ͟͟͞͞➳❥ _By Cristian_*
*⊰᯽⊱┈──╌•|* ⊱✿⊰ *|•╌──┈⊰᯽⊱*
*╭┄⊰* ${tradutor.texto1[1]}
*│* დ _.pack_
*│* დ _.pack2_
*│* დ _.pack3_
*│* დ _.hentai_
*│* დ _.tetas_
*│* დ _.pechos_
*│* დ _.panties_
*│* დ _.pene_
*│* დ _.porno_
*│* დ _.randomxxx_
*│* დ _.videoxxx_
*│* დ _.videolesbixxx_
*│* დ _.imagenlesbianas_
*│* დ _.trapito_
*│* დ _.booty_
*│* დ _.ecchi_
*│* დ _.furro_
*│* დ _.yaoi_
*│* დ _.yaoi2_
*│* დ _.yuri_
*│* დ _.yuri2_
*│* დ _.nsfwloli_
*│* დ _.nsfworgy_
*│* დ _.nsfwfoot_
*│* დ _.nsfwass_
*│* დ _.nsfwbdsm_
*│* დ _.nsfwcum_
*│* დ _.nsfwero_
*│* დ _.nsfwfemdom_
*│* დ _.hentaipdf *txt*_
*│* დ _.hentaisearch *txt*_
*╰─────────────────┄⊰*`.trim();
    if (m.isGroup) {
      await conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
      await conn.sendFile(m.chat, vn, './src/assets/audio/01J673V13NHPW7FA028ZPYC18Q.mp3', null, m, true, {type: 'audioMessage', ptt: true});
    } else {
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      await conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
      await conn.sendFile(m.chat, vn, './src/assets/audio/01J673V13NHPW7FA028ZPYC18Q.mp3', null, m, true, {type: 'audioMessage', ptt: true});
    }
  } catch {
    conn.reply(m.chat, tradutor.texto1[2], m);
  }
};
handler.command = /^(menulabiblia|labiblia|hornymenu|menucaliente|menu18|menuhorny|Labiblia)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;

function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
