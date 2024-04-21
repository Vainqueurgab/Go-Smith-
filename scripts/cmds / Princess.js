module.exports = {
  config: {
    name: "princess",
    aliases: [""],
    version: "1.0",
    author: "Loid Butter",
    countDown: 10,
    role: 0,
    shortDescription: "Playing princess, the oldest gambling game",
    longDescription: "Play princess, the oldest gambling game, and earn money",
    category: "game",
    guide: "{pn} <pals/fairy> <amount of money>"
  },

  onStart: async function ({ args, message, usersData, event }) {
    const betType = args[0];
    const betAmount = parseInt(args[1]);
    const user = event.senderID;
    const userData = await usersData.get(event.senderID);

    if (!["fairy", "pals"].includes(betType)) {
      return message.reply("𝐏𝐥𝐞𝐚𝐬𝐞 𝐜𝐡𝐨𝐨𝐬𝐞 𝐟𝐚𝐢𝐫𝐲|𝐩𝐚𝐥𝐬 ");
    }

    if (!Number.isInteger(betAmount) || betAmount < 500) {
      return message.reply("❌ | 𝐕𝐨𝐮𝐬 𝐝𝐞𝐯𝐞𝐳 𝐚𝐯𝐨𝐢𝐫 𝐚𝐮 𝐦𝐨𝐢𝐧𝐬 500 𝐩𝐨𝐮𝐫 𝐩𝐚𝐫𝐢𝐞𝐫");
    }

    if (betAmount > userData.money) {
      return message.reply("𝐃𝐞𝐬𝐨𝐥𝐞 𝐭𝐮 𝐧'𝐚 𝐩𝐚𝐬 𝐜𝐞𝐭𝐭𝐞 𝐬𝐨𝐦𝐦𝐞 💔");
    }

    const dice = [1, 2, 3, 4, 5, 6];
    const results = [];

    for (let i = 0; i < 3; i++) {
      const result = dice[Math.floor(Math.random() * dice.length)];
      results.push(result);
    }

    const winConditions = {
      fairy: results.filter((num, index, arr) => num >= 1 && num <= 3 && arr.indexOf(num) !== index).length > 0,
      pals: results.filter((num, index, arr) => num >= 4 && num <= 6 && arr.indexOf(num) !== index).length > 0,
    };

    const resultString = results.join(" | ");

    if ((winConditions[betType] && Math.random() <= 0.4) || (!winConditions[betType] && Math.random() > 0.4)) {
      const winAmount = 2 * betAmount;
      userData.money += winAmount;
      await usersData.set(event.senderID, userData);
      return message.reply(`★~(◠‿◕✿) ${resultString} ]\\🤑☘ 𝐅𝐞𝐥𝐢𝐜𝐢𝐭𝐚𝐭𝐢𝐨𝐧𝐬 𝐭𝐮 𝐯𝐢𝐞𝐧𝐬 𝐝𝐞 𝐠𝐚𝐠𝐧𝐞𝐫✨☘ ${winAmount}!`);
    } else {
      userData.money -= betAmount;
      await usersData.set(event.senderID, userData);
      return message.reply(`(⁠╯⁠︵⁠╰⁠,⁠) >[ ${resultString} ]\\🥺☘ 𝐃𝐄𝐒𝐎𝐋𝐄 𝐓𝐔 𝐕𝐈𝐄𝐍𝐒 𝐃𝐄 𝐏𝐄𝐑𝐃𝐑𝐄 ☘ ${betAmount}.`);
    }
  }
};
