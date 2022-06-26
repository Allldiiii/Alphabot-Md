const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	alfa: 'https://api.zeeoneofc.xyz', //apabila link api eror, segera laporkan ke owner
}

// Free apikey
global.APIKeys = {
	'https://api.zeeoneofc.xyz': 'your apikey',  // login https://api.zeeoneofc.xyz to get apikey || https://api-alphabot.herokuapp.com
}

// setting 
global.autoread = true // auto read pesan / message
//global.autorecording = false //status auto merekam ( auto record )
//global.autoketik = true //status auto mengetik (auto typing)
//global.available = false //status online (online)

// Other
global.botname = "Al" //namabot kalian
global.ownername= "ᴹᴿ᭄ ItsmeAl ×፝֟͜×" //nama kalian
global.myweb ="https://instagram.com/al.lrf" //bebas asal jan hapus
global.youtube = "https://instagram.com/al.lrf" //bebas asal jan hapus
global.github = "https://instagram.com/al.lrf" //bebas
global.email = "aldyrahmanfernando081@gmail.com" //bebas
global.region = "Indonesia" //bebas
global.ownernomer = "082311719942" // nomor wa kalian
global.ownernomerr = "082311719942" //nmr wa kalian
global.thumbnail = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "./image/donasi.jpg" // foto donasi di folder image
global.background_welcome="https://telegra.ph/file/90a931648de597820bc08.jpg" // maks size 30kb, agar welcome image nya tdk delay
global.owner = ["6282311719942","6282311719942","6281277057368"] //ganti agar fitur owner bisa di gunakan
global.packname = '© all-Mdོ' //sticker wm ubah
global.author = 'Di Buat Oleh allGanz By Aldi' //sticker wm ganti nama kalian
global.sessionName = 'session'
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    sukses: 'Udah ya anjeng, lain kali gausah manja ngntd',
    admin: '_Cuma bisa di gunakan oleh admin yang tamvan dan camtik_🗿 !',
    botAdmin: 'Gua bukan *admin* anjeng!',
    owner: 'Perintah Ini Hanya Bisa Digunakan Oleh majikan !',
    group: 'Perintah Ini Hanya Bisa Digunakan Di Group !',
    private: 'Perintah Ini Hanya Bisa Digunakan Di Private !',
	bot: 'Fitur Khusus Pengguna Nomor Bot',
    errtoimg: 'Maaf Saat Ini Belum Support Sticker Gif !',
    wait: '⏳ SABAR NGNTD',
	lockCmd: 'Fitur Tidak Diaktifkan Oleh Owner!',
	example1: 'Selamat Datang @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
