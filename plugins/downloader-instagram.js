import axios from 'axios'

let handler = async (m, { conn, args }) => {
    if (!args[0]) throw m.reply('Ingresa el link de Instagram');
    const sender = m.sender.split('@')[0];
    const url = args[0];

    m.reply(wait);

    try {
        const { data } = await axios.get(`fgmods', '/api/downloader/igdl', { url: args[0] }, 'apikey`);

        if (!data.status || !data.data || data.data.length === 0) throw m.reply('Error');

        // Prioritize 720p (HD) and fallback to 360p (SD)
        let video = data.results[0];
        
        if (video && video.url) {
            const videoBuffer = await axios.get(video.url, { responseType: 'arraybuffer' }).then(res => res.data);
            const caption = `✧ Para: @${sender}`;

            await conn.sendMessage(
                m.chat, {
                video: videoBuffer,
                mimetype: "video/mp4",
                fileName: `video.mp4`,
                caption: caption,
                mentions: [m.sender],
            }, {
                quoted: m
            }
            );
        } else {
            throw m.reply('Error');
        }
    } catch (error) {
        console.error('Handler Error:', error);
        conn.reply(m.chat, `Error: ${error}`, m);
    }
}

handler.help = ['ig'].map(v => v + ' *<link>*')
handler.tags = ['downloader']

handler.command = /^(ig(dl)?)$/i

handler.register = true

export default handler
