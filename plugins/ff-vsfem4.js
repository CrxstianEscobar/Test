const handler = async (m, {conn}) => {
  m.reply(global.fem4);
};
handler.command = /^(fem4|fem4vs4)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.fem4 = `ㅤㅤㅤㅤ *_VV2 FEM_*
╭─────━━━━────── •••
»  _*⏰Hora:* 00🇵🇪 / 02🇦🇷_
»  _*☁️Modalidad:* 4vs4_
╰◣◥◣◥◤◢◤◢◣◥◣◥◤
ㅤ _ʚ Jugadoras:_ ᭡
💋 • 
💋 • 
💋 • 
💋 • 
ㅤ _ʚ Suplentes:_ ᭡
💋 • 
💋 •
· · ────── ·•· ────── · ·`;