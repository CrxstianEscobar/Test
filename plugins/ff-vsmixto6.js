const handler = async (m, {conn}) => {
  m.reply(global.mixto6);
};
handler.command = /^(mixto6|mixto6vs6)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.mixto6 = `ㅤㅤㅤㅤ *_VV2 MIXTO_*
╭─────━━━━────── •••
»  _*⏰Hora:* 00🇵🇪 / 02🇦🇷_
»  _*☁️Modalidad:* 6vs6_
╰◣◥◣◥◤◢◤◢◣◥◣◥◤
ㅤ _ʚ Jugadorxs:_ ᭡
🚻 • 
🚻 • 
🚻 • 
🚻 • 
🚻 • 
🚻 • 
ㅤ _ʚ Suplentes:_ ᭡
🚻 • 
🚻 •
· · ────── ·•· ────── · ·`;