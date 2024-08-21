const fs = require('fs');

module.exports = {
  config: {
    name: "file",
    version: "1.0",
    author: "OtinXShiva",
    countDown: 5,
    role: 0,
    shortDescription: "Send bot script",
    longDescription: "Send bot specified file ",
    category: "owner",
    guide: "{pn} file name. Ex: .{pn} filename"
  },

  onStart: async function ({ message, args, api, event }) {
    const permission = ["61555963733226"];
    if (!permission.includes(event.senderID)) {
      return api.sendMessage("𝗱⃪𝗲⃪𝘀⃪𝗼⃪𝗹⃪𝗲⃪ 𝘀⃪𝗲⃪𝘂⃪𝗹⃪ 𝗺⃪𝗼⃪𝗻⃪ 𝗰⃪𝗿⃪𝗲⃪𝗮⃪𝘁⃪𝗲⃪𝘂⃪𝗿⃪ 𝗮⃪ 𝗱⃪𝗿⃪𝗼⃪𝗶⃪𝘁⃪ 𝗮⃪ 𝘂⃪𝘁⃪𝗶⃪𝗹⃪𝗶⃪𝘀⃪𝗲⃪ 𝗰⃪'𝗲⃪𝘀⃪𝘁⃪ 𝗰⃪𝗺⃪𝗱⃪ 🜋 𝗢𝗹𝗶𝘃𝗲𝗿 𝗴𝗮𝗯𝗿𝗶𝗲𝗹 🜋 ", event.threadID, event.messageID);
    }
    
    const fileName = args[0];
    if (!fileName) {
      return api.sendMessage("𝖡𝖺𝗅𝖺𝗇𝖼𝖾 𝗅𝖾 𝗇𝗈𝗆 𝖽𝗎 𝖿𝗂𝖼𝗁𝗂𝖾𝗋.", event.threadID, event.messageID);
    }

    const filePath = __dirname + `/${fileName}.js`;
    if (!fs.existsSync(filePath)) {
      return api.sendMessage(`File not found: ${fileName}.js`, event.threadID, event.messageID);
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    api.sendMessage({ body: fileContent }, event.threadID);
  }
};
