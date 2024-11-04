import yts from 'yt-search' 
const handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `_*< DESCARGAS - SONG />*_\n\n*[ ℹ️ ] Hace falta el título o enlace del video de YouTube.*\n\n*[ 💡 ] Ejemplo:* _.song Cris Mj - Si no es contigo_`;

    const randomReduction = Math.floor(Math.random() * 5) + 1;
    let search = await yts(text);
    let isVideo = /vid$/.test(command);
    let urls = search.all[0].url;
    let body = `_*< DESCARGAS - SONG />*_

▢ *Título:* ${search.all[0].title}
▢ *Vistas:* ${search.all[0].views}
▢ *Duración:* ${search.all[0].timestamp}
▢ *Publicado:* ${search.all[0].ago}
▢ *Enlace:* ${urls}

> *[ ℹ️ ] Se está enviando el ${isVideo ? 'Video' : 'Audio'}, espere un momento...*`;

      conn.sendMessage(m.chat, {
  text: body,
  contextInfo: {
    externalAdReply: {
      title: search.all[0].title,
      body: wm,
      thumbnailUrl: search.all[0].thumbnail, // Agrega la URL de la imagen aquí
      mediaType: 1,
      showAdAttribution: true,
      renderLargerThumbnail: true
    }
  }
}, { quoted: m });

    let res = await dl_vid(urls)
    let type = isVideo ? 'video' : 'audio';
    let video = res.data.mp4;
    let audio = res.data.mp3;
    conn.sendMessage(m.chat, { 
        [type]: { url: isVideo ? video : audio }, 
        gifPlayback: false, 
        mimetype: isVideo ? "video/mp4" : "audio/mpeg" 
    }, { quoted: m });
}

handler.command = ['song', 'songvid'];
handler.help = ['song', 'songvid'];
handler.tags = ['descargas'];
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
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
}
