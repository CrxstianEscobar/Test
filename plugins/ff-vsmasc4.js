const handler = async (m, {conn}) => {
  m.reply(global.masc4);
};
handler.command = /^(masc4|masc4vs4)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.masc4 = `ㅤㅤㅤㅤ *_VV2 MASC_*
╭─────━━━━────── •••
»  _*⏰Hora:* 00🇵🇪 / 02🇦🇷_
»  _*☁️Modalidad:* 4vs4_
╰◣◥◣◥◤◢◤◢◣◥◣◥◤
ㅤ _ʚ Jugadores:_ ᭡
👹 • 
👹 • 
👹 • 
👹 • 
ㅤ _ʚ Suplentes:_ ᭡
👹 • 
👹 •
· · ────── ·•· ────── · ·`;