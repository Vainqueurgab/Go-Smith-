module.exports = {
  config: {
    name: "slot",
    version: "1.1",
    author: "Kshitiz x Gojo",
    role: 0,
    shortDescription: "Play a slot game",
    longDescription: "Play a slot game.",
    category: "game",
    guide: {
      en: "{p}slot {money} / reply to gift box by number"
    }
  },

  onStart: async function ({ args, message, event, api, usersData }) {
    try {
      const amount = parseInt(args[0]);
      if (isNaN(amount) || amount <= 0) {
        return message.reply("Please provide a valid amount of money.");
      }

      const senderID = event.senderID;

      const userData = await usersData.get(senderID);

      if (amount > userData.money) {
        return message.reply("You don't have enough money to play this game.");
      }

      const sentMessage = await message.reply("🎁🎁🎁");

      const emojis = ['💣', '💣', '💎'];
      emojis.sort(() => Math.random() - 0.5); 

      const shuffledEmojis = emojis.join('');

      const gemPosition = emojis.indexOf('💎');

      global.GoatBot.onReply.set(sentMessage.messageID, {
        commandName: "slot",
        messageID: sentMessage.messageID,
        correctAnswer: gemPosition,
        amount: amount,
        senderID: senderID
      });

    } catch (error) {
      console.error("Error in slot command:", error);
      message.reply("An error occurred.");
    }
  },

  onReply: async function ({ message, event, Reply, api, usersData }) {
    try {
      if (!event || !message || !Reply) return; 
      const userAnswer = event.body.trim();

      if (isNaN(userAnswer) || userAnswer < 1 || userAnswer > 3) {
        return message.reply("Please reply with a number between 1 and 3.");
      }

      const gemPosition = Reply.correctAnswer;
      const chosenPosition = parseInt(userAnswer) - 1; 

      const senderID = Reply.senderID;
      const userData = await usersData.get(senderID);

      if (chosenPosition === gemPosition) {
        const winnings = Reply.amount * 2;
        await usersData.set(senderID, { money: userData.money + winnings }); 
        await message.reply(`Congratulations! You won ${winnings} coins.`);
      } else {
        const lostAmount = Reply.amount;
        await usersData.set(senderID, { money: userData.money - lostAmount });
        await message.reply(`Sorry, you lost.${lostAmount}.`);
      }

      const emojis = ['💣', '💣', '💎'];
      const revealedEmojis = emojis.map((emoji, index) => (index === gemPosition) ? '💎' : '💣').join('');
      await api.editMessage(revealedEmojis, Reply.messageID);
    } catch (error) {
      console.error("Error while handling user reply:", error);
    }
  }
};
