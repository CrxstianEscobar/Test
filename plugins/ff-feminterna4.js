const handler = async (m, {conn}) => {
  m.reply(global.feminterna4);
};
handler.command = /^(feminterna4|internafem4vs4)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.feminterna4 = `ㅤㅤㅤ *_INTERNA FEM_*
╭─────━━━━────── •••
»  _*⏰Hora:* 00🇵🇪 / 02🇦🇷_
»  _*☁️Modalidad:* 4vs4_
╰◣◥◣◥◤◢◤◢◣◥◣◥◤
ㅤ _ʚ Equipo 1:_ ᭡
🪷 • 
🪷 • 
🪷 • 
🪷 • 
ㅤ _ʚ Equipo 2:_ ᭡
🌹 • 
🌹 •
🌹 • 
🌹 • 

_ঔ Organiza: <nombre>_
· · ────── ·•· ────── · ·`;