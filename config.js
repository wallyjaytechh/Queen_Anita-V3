//davidthegod

const fs = require('fs')
const { color } = require('./lib/myfunc')

//owner
global.owner = '2348144317152'
global.nomerowner = ["2348144317152"]

// Apikey 

global.skizo = 'Wally jay'
global.casterix = 'wallyjaytech'
//watermark 
global.packname = '*WALLY JAY TECH*'
global.author = 'WALLYJAAYTECH-MD'

// cpanel 
global.domain = 'https://' // 
global.apikey2 = 'ptlc' // 
global.capikey2 = 'ptla' // 
global.eggsnya = '15' // The id eggs used if the id is 5, just leave it, don't change it
global.location = '1' // id location


global.apilinode = ''// apikey vps account linode
global.apitokendo = ''

//database 
global.urldb = ''; // just leave it blank but if you want to use the mongo database, fill in the mongo url

global.limitawal = {
    premium: "Infinity",
    monayawal: 0,
    free: 100
}

//rpg
global.buruan = {
   ikan: 5,
   ayam: 5,
   kelinci: 5,
   domba: 5,
   sapi: 5,
   gajah: 5
}
global.rpg = {
   darahawal: 100,
   energyawal: 252,
   besiawal: 5,
   goldawal: 1,
   emeraldawal: 1,
   umpanawal: 1,
   potionawal: 1
}

//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = true;                //make true to enable auto recording
global.autoViewStatus = true;       //make true to view statuses
global.unavailable = false;     
//to show your real presence  
global.available = true;   
// to show always online  
global.autoreadmessages = true;   
///To always read messages
global.chatbot = false;
global.autoreact = false;

global.welcome = true;

global.prefix = '#';

global.autobio = false;

global.antilink = false;

global.antilinkkick = false;

global.antilinkwarn = false;

//_____________//
// Don't change it
global.antibot = false
//—————「 Deadline 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(color(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
