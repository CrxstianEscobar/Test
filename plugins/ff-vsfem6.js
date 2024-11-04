const handler = async (m, {conn}) => {
  m.reply(global.fem6);
};
handler.command = /^(fem6|fem6vs6)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.fem6 = `ㅤㅤㅤㅤ *_VV2 FEM_*
╭─────━━━━────── •••
»  _*⏰Hora:* 00🇵🇪 / 02🇦🇷_
»  _*☁️Modalidad:* 6vs6_
╰◣◥◣◥◤◢◤◢◣◥◣◥◤
ㅤ _ʚ Jugadoras:_ ᭡
🌸 • 
🌸 • 
🌸 • 
🌸 • 
🌸 • 
🌸 • 
ㅤ _ʚ Suplentes:_ ᭡
🌸 • 
🌸 •
· · ────── ·•· ────── · ·`;