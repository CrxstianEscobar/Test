import fetch from 'node-fetch';

// Para configurar o idioma, na raiz do projeto altere o arquivo config.json
// Para configurar el idioma, en la raíz del proyecto, modifique el archivo config.json.
// To set the language, in the root of the project, modify the config.json file.

const handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {

  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const datas = global
    const idioma = datas.db.data.users[m.sender].language || global.defaultLenguaje
    const _translate = JSON.parse(fs.readFileSync(`./src/languages/${idioma}.json`))
    const tradutor = _translate.plugins.menu_menu
    // const pp = imagen7;

    // let vn = './src/assets/audio/01J673Y3TGCFF1D548242AX68Q.mp3'
    const img = './src/assets/images/menu/languages/es/allmenu.png';
    const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const week = d.toLocaleDateString(locale, { weekday: 'long' });
    const date = d.toLocaleDateString(locale, { day: '2-digit', month: '2-digit', year: 'numeric' });
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const { money, joincount } = global.db.data.users[m.sender];
    const { exp, limit, level, role } = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `> ⓘ ¡Hola!, ${taguser}
> ${date}
*˚₊·˚₊· ͟͟͞͞➳❥ _Xime Luxe Bot_*
*☆═━┈◈ ╰ 1.4.0 MD ╯ ◈┈━═☆*
*│* 
*╰ ˚₊·˚₊· ͟͟͞͞➳❥ _By Cristian_*
*⊰᯽⊱┈──╌•|* ⊱✿⊰ *|•╌──┈⊰᯽⊱*
*╭┄⊰* ${tradutor.texto1[0]}
*│* დ _.grupos_
*│* დ _.estado_
*│* დ _.infobot_
*│* დ _.speedtest_
*│* დ _.donar_
*│* დ _.owner_
*│* დ _.script_
*│* დ _.reporte *texto*_
*│* დ _.join *link*_
*│* დ _.fixmsgespera_
*│* დ _bot (sin prefijo)_
*╰─────────────────┄⊰*

*╭┄⊰* ${tradutor.texto1[1]}
*│* დ _.serbot --code_
*│* დ _.serbot_
*│* დ _.deletebot_
*│* დ _.token_
*│* დ _.stop_
*│* დ _.bots_
*╰─────────────────┄⊰*

*╭┄⊰* ${tradutor.texto1[2]}
*│* დ _.enable *(Activar)*_
*│* დ _.disable *(Desactivar)*_
*╰─────────────────┄⊰*

*╭┄⊰* ${tradutor.texto1[3]}
*│* დ _.fem4_
*│* დ _.fem6_
*│* დ _.feminterna4_
*│* დ _.feminterna6_
*│* დ _.masc4_
*│* დ _.masc6_
*│* დ _.mascinterna4_
*│* დ _.mascinterna6_
*│* დ _.mixto4_
*│* დ _.mixto6_
*│* დ _.mixtointerna4_
*│* დ _.mixtointerna6_
*│* დ _.lista4_
*│* დ _.apos_
*│* დ _.mapa_
*│* დ _.ficha_
*│* დ _.nexterra_
*│* დ _.bermuda_
*│* დ _.kalahari_
*│* დ _.alpes_
*│* დ _.agendasemanal_
*│* დ _.buscarvsmasc_
*│* დ _.vsmasc_
*│* დ _.buscarvsfem_
*│* დ _.vsfem_
*│* დ _.buscarvsmixto_
*│* დ _.vsmixto_
*╰─────────────────┄⊰*

*╭┄⊰* ${tradutor.texto1[4]}
*│* დ _.spamapk_
*│* დ _.spamcomu_
*│* დ _.spam2_
*│* დ _.recursosdzn_
*│* დ _.drivesdzn_
*│* დ _.dzn_
*│* დ _.apkedits_
*│* დ _.drivedits_
*╰─────────────────┄⊰*

*╭┄⊰* ${tradutor.texto1[5]}
*│* დ _.play *txt*_
*│* დ _.play2 *txt*_
*│* დ _.play.1 *txt*_
*│* დ _.play.2 *txt*_
*│* დ _.playdoc *txt*_
*│* დ _.playdoc2 *txt*_
*│* დ _.playlist *txt*_
*│* დ _.spotify *txt*_
*│* დ _.pinterest *txt*_
*│* დ _.ringtone *txt*_
*│* დ _.soundcloud *txt*_
*│* დ _.wallpaper *txt*_
*│* დ _.ytshort *url*_
*│* დ _.ytmp3 *url*_
*│* დ _.ytmp3doc *url*_
*│* დ _.ytmp4 *url*_
*│* დ _.ytmp4doc *url*_
*│* დ _.videodoc *url*_
*│* დ _.facebook *url*_
*│* დ _.instagram *url*_
*│* დ _.tiktok *url*_
*│* დ _.tiktokimg *url*_
*│* დ _.mediafire *url*_
*│* დ _.gitclone *url*_
*│* დ _.gdrive *url*_
*│* დ _.pptiktok *usr*_
*│* დ _.igstory *usr*_
*│* დ _.twitter *url*_
*│* დ _.stickerpack *url*_
*│* დ _.dapk2 *url*_
*│* დ _.xnxxdl *url*_
*│* დ _.xvideosdl *url*_
*╰─────────────────┄⊰*

*╭┄⊰* ${tradutor.texto1[6]}
*│* დ _.githubsearch *txt*_
*│* დ _.pelisplus *txt*_
*│* დ _.modapk *txt*_
*│* დ _.stickersearch *txt*_
*│* დ _.stickersearch2 *txt*_
*│* დ _.xnxxsearch *txt*_
*│* დ _.animeinfo *txt*_
*│* დ _.google *txt*_
*│* დ _.letra *txt*_
*│* დ _.wikipedia *txt*_
*│* დ _.ytsearch *txt*_
*│* დ _.playstore *txt*_
*╰─────────────────┄⊰*

*╭┄⊰* ${tradutor.texto1[7]}
*│* დ _.toanime *img*_
*│* დ _.togifaud *video*_
*│* დ _.tomp3 *video*_
*│* დ _.toimg *sticker*_
*│* დ _.tovideo *sticker*_
*│* დ _.tomp3 *nota de voz*_
*│* დ _.toptt *video / audio*_
*│* დ _.tts *idioma txt*_
*│* დ _.tts *efecto txt*_
*│* დ _.tourl *video / img / audio*_
*╰─────────────────┄⊰*

*╭┄⊰* ${tradutor.texto1[8]}
*│* დ _.simi *txt*_
*│* დ _.ia *txt*_
*│* დ _.iamates_
*│* დ _.iabox_
*│* დ _.delchatgpt_
*│* დ _.iavoz *txt*_
*│* დ _.dalle *txt*_
*│* დ _.gemini *txt*_
*│* დ _.geminimg *img*_
*│* დ _.calidadimg *img*_
*│* დ _.hd *img*_
*╰─────────────────┄⊰*

*╭┄⊰* ${tradutor.texto1[9]}
*│* დ _.inspect *wagc_url*_
*│* დ _.traducir *txt*_
*│* დ _.styletext *txt*_
*│* დ _.img *txt*_
*│* დ _.qrcode *txt*_
*│* დ _.readqr *img*_
*│* დ _.ocr *img*_
*│* დ _.acortar *url*_
*│* დ _.afk *motivo*_
*│* დ _.del *msj*_
*│* დ _.nowa *num*_
*│* დ _.horario_
*│* დ _.dropmail_
*│* დ _.igstalk *usr*_
*│* დ _.tiktokstalk *usr*_
*│* დ _.whatmusic *audio*_
*│* დ _.clima *país ciudad*_
*│* დ _.encuesta *txt1 txt2*_
*│* დ _.redmore *txt1 txt2*_
*│* დ _.calc *operación*_
*│* დ _.spamwa *num txt cant*_
*│* დ _.tamaño *cant img / video*_
*│* დ _.readviewonce *img / video*_
*╰─────────────────┄⊰*

*╭┄⊰* ${tradutor.texto1[10]}
*│* დ _.add *num*_
*│* დ _.kick *@tag*_
*│* დ _.kick2 *@tag*_
*│* დ _.promote *@tag*_
*│* დ _.demote *@tag*_
*│* დ _.warn *@tag*_
*│* დ _.unwarn *@tag*_
*│* დ _.listanum *txt*_
*│* დ _.kicknum *txt*_
*│* დ _.setname *txt*_
*│* დ _.setdesc *txt*_
*│* დ _.setbye *txt*_
*│* დ _.todos *txt*_
*│* დ _.notify *txt*_
*│* დ _.setwelcome *txt*_
*│* დ _.grupo *abrir / cerrar*_
*│* დ _.grouptime *opción tiempo*_
*│* დ _.infogroup_
*│* დ _.resetlink_
*│* დ _.listwarn_
*│* დ _.fantasmas_
*│* დ _.destraba_
*│* დ _admins *txt* (sin prefijo)_
*╰─────────────────┄⊰*

*╭┄⊰* ${tradutor.texto1[11]}
*│* დ _.menu18_
*╰─────────────────┄⊰*

*╭┄⊰* ${tradutor.texto1[12]}
*│* დ _.mates_
*│* დ _.fake *txt @tag*_
*│* დ _.ppt_
*│* დ _.prostituto *nombre / @tag*_
*│* დ _.prostituta *nombre / @tag*_
*│* დ _.gay2 *nombre / @tag*_
*│* დ _.gay *nombre / @tag*_
*│* დ _.lesbiana *nombre / @tag*_
*│* დ _.pajero *nombre / @tag*_
*│* დ _.pajera *nombre / @tag*_
*│* დ _.puto *nombre / @tag*_
*│* დ _.puta *nombre / @tag*_
*│* დ _.manco *nombre / @tag*_
*│* დ _.manca *nombre / @tag*_
*│* დ _.rata *nombre / @tag*_
*│* დ _.love *nombre / @tag*_
*│* დ _.doxear *nombre / @tag*_
*│* დ _.pregunta *txt*_
*│* დ _.simi *txt*_
*│* დ _.top *txt*_
*│* დ _.suitpvp *@tag*_
*│* დ _.slot *apuesta*_
*│* დ _.ttt *nombre de la sala*_
*│* დ _.acertijo_
*│* დ _.topgays_
*│* დ _.topotakus_
*│* დ _.formarpareja_
*│* დ _.verdad_
*│* დ _.reto_
*│* დ _.cancion_
*│* დ _.pista_
*│* დ _.akinator_
*│* დ _.ruleta_
*│* დ _.wordfind_
*│* დ _.glx_
*╰─────────────────┄⊰*

*╭┄⊰* ${tradutor.texto1[13]}
*│* დ _.s *img / video / url*_
*│* დ _.s2 *img / video / url*_
*│* დ _.emojimix *emoji1 emoji2*_
*│* დ _.scircle *img*_
*│* დ _.sremovebg *img*_
*│* დ _.semoji *tipo emoji*_
*│* დ _.qc *txt*_
*│* დ _.attp *txt*_
*│* დ _.attp2 *txt*_
*│* დ _.attp3 *txt*_
*│* დ _.ttp *txt*_
*│* დ _.ttp2 *txt*_
*│* დ _.ttp3 *txt*_
*│* დ _.ttp4 *txt*_
*│* დ _.ttp5 *txt*_
*│* დ _.pat *@tag*_
*│* დ _.slap *@tag*_
*│* დ _.kiss *@tag*_
*│* დ _.dado_
*│* დ _.wm *packname autor*_
*│* დ _.stickermarker *efecto img*_
*│* დ _.stickerfilter *efecto img*_
*╰─────────────────┄⊰*

*╭┄⊰* ${tradutor.texto1[14]}
*│* დ _.menuaudios_
*╰─────────────────┄⊰*

*╭┄⊰* ${tradutor.texto1[15]}
*│* დ _.adventure_
*│* დ _.cazar_
*│* დ _.cofre_
*│* დ _.balance_
*│* დ _.claim_
*│* დ _.heal_
*│* დ _.lb_
*│* დ _.levelup_
*│* დ _.myns_
*│* დ _.perfil_
*│* დ _.work_
*│* დ _.minar_
*│* დ _.minar2_
*│* დ _.buy_
*│* დ _.buyall_
*│* დ _.verificar_
*│* დ _.crime_
*│* დ _.robar *cant @tag*_
*│* დ _.transfer *tipo cant @tag*_
*│* დ _.unreg *sn*_
*╰─────────────────┄⊰*

*╭┄⊰* ${tradutor.texto1[16]}
*│* დ _.start_
*│* დ _.next_
*│* დ _.leave_
*╰─────────────────┄⊰*

*╭┄⊰* ${tradutor.texto1[17]}
*│* დ _.piropo_
*│* დ _.consejo_
*│* დ _.fraseromantica_
*│* დ _.historiaromantica_
*╰─────────────────┄⊰*

*╭┄⊰* ${tradutor.texto1[18]}
*│* დ _.logos *efecto txt*_
*│* დ _.logochristmas *txt*_
*│* დ _.logocorazon *txt*_
*│* დ _.ytcomment *txt*_
*│* დ _.hornycard *@tag*_
*│* დ _.simpcard *@tag*_
*│* დ _.lolice *@tag*_
*│* დ _.itssostupid_
*│* დ _.pixelear_
*│* დ _.blur_
*╰─────────────────┄⊰*

*╭┄⊰* ${tradutor.texto1[19]}
*│* ⓘ Responde a un audio.
*│* დ _.bass_
*│* დ _.blown_
*│* დ _.deep_
*│* დ _.earrape_
*│* დ _.fast_
*│* დ _.fat_
*│* დ _.nightcore_
*│* დ _.reverse_
*│* დ _.robot_
*│* დ _.slow_
*│* დ _.smooth_
*│* დ _.tupai_
*╰─────────────────┄⊰*

*╭┄⊰* ${tradutor.texto1[19]}
*│* ⓘ Responde a un audio.
*│* დ _.bass_
*│* დ _.blown_
*│* დ _.deep_
*│* დ _.earrape_
*│* დ _.fast_
*│* დ _.fat_
*│* დ _.nightcore_
*│* დ _.reverse_
*│* დ _.robot_
*│* დ _.slow_
*│* დ _.smooth_
*│* დ _.tupai_
*╰─────────────────┄⊰*

*╭┄⊰* ${tradutor.texto1[20]}
*│* დ _.kpop_
*│* დ _.messi_
*│* დ _.cristianoronaldo_
*│* დ _.cat_
*│* დ _.dog_
*│* დ _.meme_
*│* დ _.itzy_
*│* დ _.blackpink_
*│* დ _.navidad_
*│* დ _.wpmontaña_
*│* დ _.pubg_
*│* დ _.wpgaming_
*│* დ _.wpaesthetic_
*│* დ _.wpaesthetic2_
*│* დ _.wprandom_
*│* დ _.wallhp_
*│* დ _.wpvehiculo_
*│* დ _.wpmoto_
*│* დ _.coffee_
*│* დ _.pentol_
*│* დ _.caricatura_
*│* დ _.ciberespacio_
*│* დ _.technology_
*│* დ _.doraemon_
*│* დ _.hacker_
*│* დ _.planeta_
*│* დ _.randomprofile_
*╰─────────────────┄⊰*`

    let pp
    // Nouvelles images de menu disponibles 
    if (idioma == 'es') {
      pp = global.imagen1
    } else if (idioma == 'pt-br') {
      pp = global.imagen2
    } else if (idioma == 'fr') {
      pp = global.imagen3
    }else if (idioma == 'en') {
      pp = global.imagen4
    } else if (idioma == 'ru') {
      pp = global.imagen5
    } else {
      pp = global.imagen1 // Imagem Default em espanhol
    }



    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, './src/assets/audio/01J673Y3TGCFF1D548242AX68Q.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net') }, { quoted: m });
    } else {
      //await conn.sendFile(m.chat, vn, './src/assets/audio/01J673Y3TGCFF1D548242AX68Q.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak = { key: { participants:"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
      conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net') }, { quoted: fkontak });
    }
  } catch {
    const datas = global
    const idioma = datas.db.data.users[m.sender].language || global.defaultLenguaje
    const _translate = JSON.parse(fs.readFileSync(`./src/languages/${idioma}.json`))
    const tradutor = _translate.plugins.menu_menu

    conn.reply(m.chat, tradutor.texto1[29], m);
  }
};
handler.command = /^(allmenu|allmenú)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
      }
