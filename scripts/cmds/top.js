module.exports = { 
config: {
 name: "top",
 version: "1.0",
 author: "Loid Butter",
 role: 0,
 shortDescription: {
 en: "Top 100 Rich Users"
 },
 longDescription: {
 en: ""
 },
 category: "group",
 guide: {
 en: "{pn}"
 }
 },
 onStart: async function ({ api, args, message, event, usersData }) {
 const allUsers = await usersData.getAll();
 
 const topUsers = allUsers.sort((a, b) => b.money - a.money).slice(0, 100);
 
 const topUsersList = topUsers.map((user, index) => `〉⋆${index + 1}~〘${user.name}〙💴\n:𝗕𝗔𝗟 : 💰${user.money}💶`);
 
 const messageText = `🌹𝗧𝗢𝗣🌹: 100 ♔︎𝘙𝘐𝘊𝘏𝘌𝘚𝘛♕︎:\n────────────\n${topUsersList.join('\n')}\n────────────\n🟢𝗧𝗢𝗣-100✨️ `;
 
 message.reply(messageText);
 }
};
