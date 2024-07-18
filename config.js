const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254794316375";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_54_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMixcbiAgICAgICAgMTM0LFxuICAgICAgICAyOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTYyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTcxLFxuICAgICAgICA4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDcyLFxuICAgICAgICAxODksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjI3LFxuICAgICAgICA5MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzksXG4gICAgICAgIDgwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDI2LFxuICAgICAgICA1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNixcbiAgICAgICAgMTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTkzLFxuICAgICAgICA1OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDcxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NixcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDk4LFxuICAgICAgICAwLFxuICAgICAgICA5MCxcbiAgICAgICAgMzksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAzNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDY4LFxuICAgICAgICAzMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzLFxuICAgICAgICAxODMsXG4gICAgICAgIDk3LFxuICAgICAgICAxNixcbiAgICAgICAgMTU3LFxuICAgICAgICA2MixcbiAgICAgICAgMjQsXG4gICAgICAgIDg3LFxuICAgICAgICAyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDYyLFxuICAgICAgICAzMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjI5LFxuICAgICAgICA5OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjEsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTYyLFxuICAgICAgICA0MixcbiAgICAgICAgMjU0LFxuICAgICAgICAxODksXG4gICAgICAgIDcsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTcwLFxuICAgICAgICA5NixcbiAgICAgICAgNDcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTExLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODcsXG4gICAgICAgIDExMSxcbiAgICAgICAgODUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDY3LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNjhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDI3LFxuICAgICAgICAxNixcbiAgICAgICAgMzksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDEsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjksXG4gICAgICAgIDgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTksXG4gICAgICAgIDgwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDg2LFxuICAgICAgICA5NixcbiAgICAgICAgNzIsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTksXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDY3LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwid25TdG9JZVJJeDYveXJpaTdqNE1PWlRySmlMNHd0aUFnYnpRYmo4SCtGWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3OTQzMTYzNzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjc2RDA3RTYxQTAyOUREMTQ2NkM5MDI1Mzc2OTMyM0Q3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTI5Mjg3OFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJlUDJwMjVJMFJYMkdyYzZzdXRuTnN3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjlhZDQyYWEyLTgxMjAtNDU5My05OGQ1LWNiZTQzOTFkZmUxNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4LFxuICAgICAgODgsXG4gICAgICAyNDcsXG4gICAgICAxODcsXG4gICAgICAxMjcsXG4gICAgICAxNDEsXG4gICAgICAyNDcsXG4gICAgICA3NSxcbiAgICAgIDEyMCxcbiAgICAgIDEzMyxcbiAgICAgIDExMixcbiAgICAgIDc2LFxuICAgICAgMjA0LFxuICAgICAgMjUsXG4gICAgICAxNCxcbiAgICAgIDI1MyxcbiAgICAgIDEsXG4gICAgICAxNjYsXG4gICAgICAxMzUsXG4gICAgICAyMzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc1LFxuICAgICAgMjE0LFxuICAgICAgMjI1LFxuICAgICAgMjksXG4gICAgICAxMyxcbiAgICAgIDExMyxcbiAgICAgIDQxLFxuICAgICAgMTg3LFxuICAgICAgNDIsXG4gICAgICA5LFxuICAgICAgMjQ5LFxuICAgICAgMjI5LFxuICAgICAgMjI3LFxuICAgICAgMSxcbiAgICAgIDE5LFxuICAgICAgNTMsXG4gICAgICAxNzQsXG4gICAgICAxODUsXG4gICAgICAxNjgsXG4gICAgICAxMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0wvUHFxTUNFTU93NDdRR0dBa2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiM0t0cmFRY2hBR243ZUJEaVh3Um15dWlWM2N1MHhuQUhkZGJYSFFZbW5qWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJKNTh1anR0a3FuRUJ1a1NKUk5OblV4UVpsVWJ4MUd1NysyMTkzYVk3SXQzUjdGQWk1WC90d2llQndobUtSSlFwL0oyaC9XTEUza2ZwSDZFWXZvcVpCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI0S3JXbWRNd2toMzcyVDYwV3NlanJkODJmWmpyakhhdUZlL1JPSjVnTkViN2toaE1wL01aQ0FaMEc0aWxwaFJsOEc1anJqeHM1T3dZOFc4UHNpMHZEQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc5NDMxNjM3NToyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTY4ODQ0MjI0MTIzMDY3OjI2QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0Nzk0MzE2Mzc1OjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDU0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEyOTI4NzEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKNDRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUo0Ky5qc29uIjogIntcImtleURhdGFcIjpcIlluWCtQZVl5K2VFakVOVXo0cmV4L2g5ZWR3bTVkc1NWbDFQZFF2ejNlTkk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjEwOTY5NTM1LFwiY3VycmVudEluZGV4XCI6OCxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjEyOTI4MDY0NThcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKNDQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI2Nk5DSDlmV2lPNTNzUVgzdC9ROTdxaVJEbG9HeUZDd0ZQR0hBRXFWMCtrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjYxMDk2OTUzNSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSjQ1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiV3lsUWRiVVVKaEh2ZGZTc2l6UCszalJGMzRuT1R5Rnc4bFB2MzQ5UDQyYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2MTA5Njk1MzUsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTI4Njc4MjgzOFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUo0Ni5qc29uIjogIntcImtleURhdGFcIjpcIkUzRm1NcjBibzVvK2h1SXI3QjlFUTVKYU9YcVBYaXVCQ3ltY3hTOGxmMkE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjEwOTY5NTM1LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjEyOTA2MjUwODRcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKNDcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJOZDdneE9qaHR5QUpDWUlwL0ExMHFVNFI0QkpVQWExdHdleGxYaGZ4WjBFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjYxMDk2OTUzNSxcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxMjkwNzMxOTI1XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSjQ4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwid2x1SG5pOUF1K295OUdYMUpJZ2hjU1N0ZDhIYnhCaE9UaW5uSXYwd2RNWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2MTA5Njk1MzUsXCJjdXJyZW50SW5kZXhcIjo2LFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTI5MjA4NzgwNVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUo0OS5qc29uIjogIntcImtleURhdGFcIjpcIlN5QmxqRTNxRFhmNzhrbzZKMndhQ1hvYmZPSmdXTU13dnlPcjgxbi9xN009XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjEwOTY5NTM1LFwiY3VycmVudEluZGV4XCI6NyxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjEyOTIxNjc5MzJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
