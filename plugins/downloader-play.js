import yts from 'yt-search' 
const handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Ejemplo: ${usedPrefix + command} Daylight`;

    const randomReduction = Math.floor(Math.random() * 5) + 1;
    let search = await yts(text);
    let isVideo = /play2$/.test(command);
    let urls = search.all[0].url;
    let body = `\`🌸 YouTube Play. 🌸\`

    *🌹 Título:* ${search.all[0].title}
    *👀 Vistas:* ${search.all[0].views}
    *🕑 Duración:* ${search.all[0].timestamp}
    *📆 Subido:* ${search.all[0].ago}
    *🔗 Url:* ${urls}

[ ℹ️ ] *Su ${isVideo ? 'Video' : 'Audio'} se está enviando, espere un momento...*`;
    
    conn.sendMessage(m.chat, { 
        image: { url: search.all[0].thumbnail }, 
        caption: body
    });

    let res = await dl_vid(urls)
    let type = isVideo ? 'video' : 'audio';
    let video = res.data.mp4;
    let audio = res.data.mp3;
    conn.sendMessage(m.chat, { 
        [type]: { url: isVideo ? video : audio }, 
        gifPlayback: false, 
        mimetype: isVideo ? "video/mp4" : "audio/mpeg" 
    });
}

handler.command = ['play', 'play2'];
handler.help = ['play1', 'play2'];
handler.tags = ['descargas'];
//handler.group = true
export default handler;

async function dl_vid(url) {
    const response = await fetch('https://shinoa.us.kg/api/download/ytdl', {
        method: 'POST',
        headers: {
            'accept': '*/*',
            'api_key': 'free',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            text: url,
        })
    });

    if (!response.ok) {
        throw new Error(`error`);
    }

    const data = await response.json();
    return data;
      }
