const handler = async (m, {conn}) => {
  m.reply(global.ficha);
};
handler.command = /^(ficha|fichareclutamiento)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.ficha = `𝙁𝙄𝘾𝙃𝘼 𝘿𝙀 𝙍𝙀𝘾𝙇𝙐𝙏𝘼𝙈𝙄𝙀𝙉𝙏𝙊
- Completa 𝗅𝖺 𝖿𝗂𝖼𝗁𝖺 𝗒 𝗌𝗂 𝗍𝗂𝖾𝗇𝖾𝗌 𝖺𝗅𝗀𝗎𝗇𝖺 𝖽𝗎𝖽𝖺 𝗆𝖾 𝖺𝗏𝗂𝗌𝖺𝗌.

ঔ 𝖭𝗈𝗆𝖻𝗋𝖾:
ঔ 𝖭𝗂𝖼𝗄:
ঔ 𝖪𝖣 𝖡𝖱:
ঔ 𝖪𝖣 𝖢𝖲:
ঔ 𝖣𝗂𝗌𝗉𝗈𝗇𝗂𝖻𝗂𝗅𝗂𝖽𝖺𝖽:

- Una vez llenado te pasaremos ID`;