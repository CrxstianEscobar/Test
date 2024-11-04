const handler = async (m, {conn}) => {
  m.reply(global.mascinterna4);
};
handler.command = /^(mascinterna4|internamasc4vs4)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.mascinterna4 = `ㅤㅤㅤ *_INTERNA MASC_*
╭─────━━━━────── •••
»  _*⏰Hora:* 00🇵🇪 / 02🇦🇷_
»  _*☁️Modalidad:* 4vs4_
╰◣◥◣◥◤◢◤◢◣◥◣◥◤
ㅤ _ʚ Equipo 1:_ ᭡
🤺 • 
🤺 • 
🤺 • 
🤺 • 
ㅤ _ʚ Equipo 2:_ ᭡
🥷🏻 • 
🥷🏻 •
🥷🏻 • 
🥷🏻 • 

_ঔ Organiza: <nombre>_
· · ────── ·•· ────── · ·`;