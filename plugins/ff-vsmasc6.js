const handler = async (m, {conn}) => {
  m.reply(global.masc6);
};
handler.command = /^(masc6|masc6vs6)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.masc6 = `ㅤㅤㅤㅤ *_VV2 MASC_*
╭─────━━━━────── •••
»  _*⏰Hora:* 00🇵🇪 / 02🇦🇷_
»  _*☁️Modalidad:* 6vs6_
╰◣◥◣◥◤◢◤◢◣◥◣◥◤
ㅤ _ʚ Jugadores:_ ᭡
🥷🏻 • 
🥷🏻 • 
🥷🏻 • 
🥷🏻 • 
🥷🏻 • 
🥷🏻 • 
ㅤ _ʚ Suplentes:_ ᭡
🥷🏻 • 
🥷🏻 •
· · ────── ·•· ────── · ·`;