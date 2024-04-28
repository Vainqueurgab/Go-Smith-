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
      
      const hours = Math.floor(uptime / 3600);
      const minutes = Math.floor((uptime % 3600) / 60);
      const seconds = Math.floor(uptime % 60);
      
      const uptimeString = `${hours}𝗵𝗿𝘀 ${minutes}𝗺𝗶𝗻${seconds}𝘀𝗲𝗰`;
      
      api.sendMessage(`🟢 | 𝑻𝐡𝐞 𝐛𝐨𝐭 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐫𝐮𝐧𝐧𝐢𝐧𝐠 : \n➢ ${uptimeString}\n✅ | ༆𝐓𝐨𝐭𝐚𝐥 𝐮𝐬𝐞𝐫 \n${allUsers.length}\n🌹 | 𝘁𝗼𝘁𝗮𝗹 𝘁𝗵𝗿𝗲𝗮𝗱𝘀\n༒ ${allThreads.length}`, event.threadID);
    } catch (error) {
      console.error(error);
      api.sendMessage("An error occurred while retrieving data.", event.threadID);
    }
  }
};
