const axios = require('axios');

const Prefixes = [
  '/ai',
  'Isabella',
  'Nemo',
  '+ai',
  'nemo',
  'ai',
  'ask',
];

module.exports = {
  config: {
    name: "ask",
    version: 1.0,
    author: "OtinXSandip",
    longDescription: "AI",
    category: "ai",
    guide: {
      en: "{p} questions",
    },
  },
  onStart: async function () {},
  onChat: async function ({ api, event, args, message }) {
    try {
      
      const prefix = Prefixes.find((p) => event.body && event.body.toLowerCase().startsWith(p));
      if (!prefix) {
        return; // Invalid prefix, ignore the command
      }
      const prompt = event.body.substring(prefix.length).trim();
   if (!prompt) {
        await message.reply("𝐒𝐚𝐥𝐮𝐭✨ 𝐦𝐨𝐢 𝐜'𝐞𝐬𝐭 𝐈𝐬𝐚𝐛𝐞𝐥𝐥𝐚 🌹𝐐𝐮𝐞𝐥 𝐞𝐬𝐭 𝐯𝐨𝐭𝐫𝐞 𝐪𝐮𝐞𝐬𝐭𝐢𝐨𝐧🌹");
        return;
      }


      const response = await axios.get(`https://sandipbaruwal.onrender.com/gpt?prompt=${encodeURIComponent(prompt)}`);
      const answer = response.data.answer;

 
    await message.reply({ body: `✨❀𝑰𝑺𝑨𝑩𝑬𝑳𝑳𝑨❀✨\n
 ❀◉✪❀◉✪❀◉✪❀
${answer}
❀◉✪❀◉✪❀◉✪❀`,
});

   } catch (error) {
      console.error("Error:", error.message);
    }
  }
};
