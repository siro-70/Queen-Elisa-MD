/*
 █▀▀█ █░▒█ █▀▀▀ █▀▀▀ █▄░▒█       █▀▀▀ █░░░ ▀█▀ █▀▀▀█ █▀▀█      
 █░▒█ █░▒█ █▀▀▀ █▀▀▀ █▒█▒█       █▀▀▀ █░░░ ░█░ ▀▀▀▄▄ █▄▄█      
 ▀▀█▄ ▀▄▄▀ █▄▄▄ █▄▄▄ █░░▀█       █▄▄▄ █▄▄█ ▄█▄ █▄▄▄█ █░▒█      


 █░░▒█   ▄█░
 ▒█▒█░   ░█░
 ░▀▄▀░   ▄█▄
 
 𝙌𝙪𝙚𝙚𝙣 𝙀𝙡𝙞𝙨𝙖 𝙈𝘿 𝘽𝙮 𝘿𝙖𝙧𝙠 𝙈𝙖𝙠𝙚𝙧 
 𝙋𝙪𝙗𝙡𝙞𝙘 𝘿𝙖𝙩𝙚 - 2022 / 07 / 03 
 𝙏𝙝𝙖𝙣𝙠𝙨 𝙏𝙤 𝙎𝙘𝙧𝙞𝙥𝙩 𝙁𝙧𝙤 𝙂𝙤𝙟𝙤 𝙎𝙖𝙩𝙤𝙧𝙪
 
 𝙏𝙝𝙖𝙣𝙠𝙨 𝙏𝙤
           𝘼𝙡𝙡 𝙃𝙚𝙡𝙥𝙚𝙧𝙨 💞
*/



const fs = require('fs')
const chalk = require('chalk')

//global api
global.fbapi = 'dd79-1aeb-21a3' // Facebook download 2 api

global.APIs = {
	zenz: 'https://zenzapi.xyz', 
}
global.APIKeys = {
	'https://zenzapi.xyz': '01ABEB1E11', //Kalau habis beli sendiri
}

//other
global.owner = ['
'] // Owner number , 
global.pemilik = ['79586848937'] //Change  it , 
global.premium = ['79586848937'] //Change it 
global.pengguna = 'Alisa Queen' // Your name 
global.botnma = '💎𝐐𝐮𝐞𝐞𝐧 𝐄𝐥𝐢𝐬𝐚 𝐁𝐨𝐭💎' // Your bot name , 
global.ownernma = '𝐐𝐮𝐞𝐞𝐧 𝐄𝐥𝐢𝐬𝐚' //ownernama,ownername
global.packname = '✨ملصقات أليسا بوت✨' 
global.author = '𝐐𝐮𝐞𝐞𝐧 𝐄𝐥𝐢𝐬𝐚' // Sticker Autor name 
global.sessionName = 'session'
global.prefa = ['#','!'😉'/'💎'💗'] 
global.sp = '🔵'
// Alive massage , ඔබේ බොගේ alive massage  *❃━═━═•〘𝐐𝐮𝐞𝐞𝐧 𝐄𝐥𝐢𝐬𝐚〙•═━═━❃*
*🎀〖 أليسا بوت 〗🎀*
*❉━━ ─━ •✿• ━─ ━━❉*
*⊢❉ أهلا بك بالبوت الخاص بي*
*╎❯〖 𝐐𝐮𝐞𝐞𝐧 𝐄𝐥𝐢𝐬𝐚 〗*

*❉━━ ─━ •✿• ━─ ━━❉*
*⊢❉ لطلب التعرف على البوت أكتب*
*╎❯〖Alevi.〗*

*❉━━ ─━ •✿• ━─ ━━❉*
*⊢❉ لطلب جميع الأوامر أكتب*
*╎❯〖meno. 〗*

*❉━━ ─━ •✿• ━─ ━━❉*
*❏ _  رقم صانع البوت*
*〖 https://wa.me/+79586848937 〗*

*❉━━ ─━ •✿• ━─ ━━❉*
*❏ _  ملاحظة:*

*❐ أياك وأن تستخدم البوت بطريقه سيئة او مُخلة، ولا تستعملة بكثرة بنفس الوقت❌*
*❃━═━═•〘𝐐𝐮𝐞𝐞𝐧 𝐄𝐥𝐢𝐬𝐚〙•═━═━❃*
global.alivelogo = `https://i.ibb.co/YBDQcgs/IMG-20220807-WA0105.jpg`
global.alive =`*❃━═━═•〘𝐐𝐮𝐞𝐞𝐧 𝐄𝐥𝐢𝐬𝐚〙•═━═━❃*
*🎀〖 أليسا بوت 〗🎀*
*❉━━ ─━ •✿• ━─ ━━❉*
*⊢❉ أهلا بك بالبوت الخاص بي*
*╎❯〖 𝐐𝐮𝐞𝐞𝐧 𝐄𝐥𝐢𝐬𝐚 〗*

*❉━━ ─━ •✿• ━─ ━━❉*
*⊢❉ لطلب التعرف على البوت أكتب*
*╎❯〖Alevi.〗*

*❉━━ ─━ •✿• ━─ ━━❉*
*⊢❉ لطلب جميع الأوامر أكتب*
*╎❯〖meno. 〗*

*❉━━ ─━ •✿• ━─ ━━❉*
*❏ _  رقم صانع البوت*
*〖 https://wa.me/+79586848937 〗*

*❉━━ ─━ •✿• ━─ ━━❉*
*❏ _  ملاحظة:*

*❐ أياك وأن تستخدم البوت بطريقه سيئة او مُخلة، ولا تستعملة بكثرة بنفس الوقت❌*
*❃━═━═•〘𝐐𝐮𝐞𝐞𝐧 𝐄𝐥𝐢𝐬𝐚〙•═━═━❃*

Download song type .yt 
Thanks fro using...`
// Welcome massage  
*◆━━─ ─⊱✿⊰✼⊱✿⊰─ ─━━◆*

*❏ _  أهلا عزيزتي أنرتنا*

*◆━━─ ─⊱✿⊰✼⊱✿⊰─ ─━━◆*
global.welcome = `
*◆━━─ ─⊱✿⊰✼⊱✿⊰─ ─━━◆*
*❏ _  أهلا عزيزتي نورتينا*
✾ أتمنى لكِ أياماً ممُمتعة معنا
✾ ❥||𝐋𝐀𝐈𝐑𝐄𝐍⦓💎⦔ 𝐒.𝐌.𝐑||❥

*◆━━─ ─⊱✿⊰✼⊱✿⊰─ ─━━◆*
//  
global.sendwelcome = `add اضافك`
// Good bye مع السلامه
global.sendgoodbye = `remove`
// Caption 
global.cap = `© 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐞𝐝 𝐁𝐲 𝐐𝐮𝐞𝐞𝐧 𝐄𝐥𝐢𝐬𝐚 𝐌𝐃`
global.mess = {
    success: '✅ تم!',
    admin: 'يجب علي أن أكون مسؤول أولاً',
    botAdmin: 'يجب أن أكون مُشرف!',
    owner: 'هذه الخاصيه لـ اليسا فقط',
    group: 'اووهه أسف هذة الخاصيه للمجموعات فقط',
    private: 'يمكن أستخدامه في الخاص فقط',
    bot: 'هذا مخصص فقط لمضيف البوت',
    wait: 'أنتظر جارِ معالجة بوت أليسا',
    endLimit: 'انتهت صلاحية الحد اليومي الخاص بك ، سيتم إعادة تعيين الحد كل 12 ساعة ،',
}
global.limitawal = {
    premium: "Infinity", 
    free: 90 
}
    global.rpg = {
        darahawal: 100,
        besiawal: 15,
        goldawal: 10,
        emeraldawal: 5,
        umpanawal: 5,
        potionawal: 1
     }    

global.thumb = fs.readFileSync('./image/Elisa.jpg')
global.imgalive = fs.readFileSync('./image/Elisa.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
