module.exports = {
    config: {
        name: "hi",
        version: "1.0",
        author: "Jaychris Garcia",
        countDown: 5,
        role: 0,
        shortDescription: "sarcasm",
        longDescription: "sarcasm",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "hi") return message.reply("🌹𝐥𝐞𝐬 𝐟𝐚𝐢𝐛𝐥𝐞 𝐧𝐞 𝐩𝐞𝐮𝐯𝐞𝐧𝐭 𝐩𝐚𝐬 𝐜𝐨𝐦𝐩𝐫𝐞𝐧𝐝𝐫𝐞 𝐥𝐞𝐬 𝐛𝐞𝐬𝐨𝐢𝐧𝐬 𝐝𝐮 𝐫𝐨𝐢 ༺ 𝐃𝐉𝐀𝐌𝐀𝐋 ༻. 𝐉'𝐚𝐜𝐜𝐞𝐩𝐭𝐞 𝐝𝐞 𝐯𝐨𝐮𝐬 𝐚𝐢𝐝𝐞𝐫 , 𝐪𝐮𝐞 𝐩𝐮𝐢𝐬 𝐣𝐞 𝐟𝐚𝐢𝐫𝐞 𝐩𝐨𝐮𝐫 𝐯𝐨𝐮𝐬 🌹?");
}
};
