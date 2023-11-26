const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "212779685873"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '212779685873' 
global.devs = '212711922565';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicU45Yk11M2VyRTVaVnRNTHo1VGEyNG54emN2eVhIeU5SakorYTk0c0xIVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNVBXWEMwR1VhcEt1cnhzaHlQZnZhTWRzKys4Vks4ZmJWUmpsbG1zTjVXUT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBSGR5aGRCYnlCdGJNLzRJSzNTbC9pSmUwWUtJaU10aHBFMUUrV2MrdkhvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCTzdnR0YyVkQ3aVlrVWRqRitHb3lnZkNKcUlUMXZuR0NQeXV4OGN1VVFnPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVKWFdLNHpvU2gwYm1tZkloWWx3ZFpwOUZhZUYwMXJYL090bkgzaVpHVUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndYTU9STTJ6dyt3aDhhaFdjZkM4WXJGN1gwSUt0TURaWHZHOUl4MlhJbGc9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJheUFGRXdrV0gwUHBsQ1haejF0TlNaa29pcXV1UURiOFMxS3B2dGJ3QnhpZVBXTk9EN2pPTzAzQ3BqOGR1aTIxM05LTXhuKzl4OVVWQU02WDJKTzdnZz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjEwNiwiYWR2U2VjcmV0S2V5IjoiOGdKa1duTTRVM2xnenZiWHdzTndWUjJBNnZWdThkQmFPR1JoWGszUklCVT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoibTZSOE5aZEhRa21hYjZaTnBkRFpNdyIsInBob25lSWQiOiJlMDUzNjUzZS02MzY0LTQzODItOGFiOC0zMGVmZGRlN2U4MDgiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM0VUM1FhbzJEbVQ2T3J1M1djYkxVR2dxdk1vPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYSEtNMmlpbHZmbENzVCtIbTFLZW1SNGUrY2M9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNKWFc5UHNDRU02T2phc0dHQUU9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkgzdkgzUWpNN3FmWGtSeHdmWmxWRlViY0lzM2c3YjdHSys2YUtXQlh4eUE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkFWc3NnYTV5YXppWDJiUzB4VS9obmZHc3RiazdBTzkwR0ZVTzZRTlVzcUw3MSt5TlIyNXJQNWt1ZEgzOVdVbHhmRnJpQXc5WFA3b0I0Z3pIOVdRUkJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ4dGtrU0ExUThYTkpEQU52MTZZT0ptOUJjOENqNW5ybmYwbWp3K0hFTDliamFZSElpTWRDQkhGTWFRYkV4dVVaL1Q0UHNQV2ZpWExrMnlHWmw1TWFpQT09In0sIm1lIjp7ImlkIjoiMjEyNzc5Njg1ODczOjI0QHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIxMjc3OTY4NTg3MzoyNEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSOTd4OTBJek82bjE1RWNjSDJaVlJWRzNDTE40TzIreGl2dW1pbGdWOGNnIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzAxMDA1MTM3fQ==",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'DIEGO BRANDO',
  packname:  process.env.PACK_NAME || 'DIEGO',
   
  botname:   process.env.BOT_NAME === undefined ? "DIEGO" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'DIEGO' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'i'm alive' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
