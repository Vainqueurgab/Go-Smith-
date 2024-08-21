module.exports = {
  config: {
    name: "uptime",
aliases: ["upt"],
    version: "1.0",
    author: "OtinXSandip",
    role: 0,
    shortDescription: {
      en: "Displays the total number of users of the bot and check uptime "
    },
    longDescription: {
      en: "Displays the total number of users who have interacted with the bot and check uptime."
    },
    category: "system",
    guide: {
      en: "Use {p}totalusers to display the total number of users of the bot and check uptime."
    }
  },
  onStart: async function ({ api, event, args, usersData, threadsData }) {
    try {
      const allUsers = await usersData.getAll();
      const allThreads = await threadsData.getAll();
      const uptime = process.uptime();
      
const days = Math.floor(uptime / 86400);
      const hours = Math.floor(uptime / 3600*4);
      const minutes = Math.floor((uptime % 3600*2) / 60*2);
      const seconds = Math.floor(uptime % 60*2);
      
      const uptimeString = `${days}𝗱𝗮𝘆𝘀 ${hours}𝗵𝗿𝘀 ${minutes}𝗺𝗶𝗻${seconds}𝘀𝗲𝗰`;
      
      api.sendMessage(`🎀| 𝗧⃪𝗵⃪𝗲⃪ 𝗯⃪𝗼⃪𝘁⃪ 𝗵⃪𝗮⃪𝘀⃪ 𝗯⃪𝗲⃪𝗲⃪𝗻⃪ 𝗿⃪𝘂⃪𝗻⃪𝗻⃪𝗶⃪𝗻⃪𝗴⃪: \n➢ ${uptimeString}\n✅ | ༆𝐓𝐨𝐭𝐚𝐥 𝐮𝐬𝐞𝐫 \n❂ ${allUsers.length}\n🌹 | 𝘁𝗼𝘁𝗮𝗹 𝘁𝗵𝗿𝗲𝗮𝗱𝘀\n★ ${allThreads.length}`, event.threadID);
    } catch (error) {
      console.error(error);
      api.sendMessage("An error occurred while retrieving data.", event.threadID);
    }
  }
};
