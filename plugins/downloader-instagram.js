import fetch from 'node-fetch'

let handler = async (m, { conn, args }) => {
    if (!args[0]) throw m.reply('✧ Ingresa el link de *Instagram*')
    const sender = m.sender.split('@')[0];
    const url = args[0];

try {
    let res = await fetch(global.API('fgmods', '/api/downloader/igdl', { url: args[0] }, 'apikey'))
    if (!res.ok) throw `error` 
    let data = await res.json()

    for (let item of data.result) {
        conn.sendFile(m.chat, item.url, 'igdl.jpg', `enviado..`, m)
    }


    } catch (error) {
        m.reply(`error`)
    }

}
handler.help = ['instagram <link ig>']
handler.tags = ['dl']
handler.command = ['ig', 'igdl', 'instagram', 'igimg', 'igvid']
handler.diamond = true

export default handler
