const axios = require("axios");
const fs = require("fs-extra");
const request = require("request");
module.exports = {
	config: {
		name: "bye",
		aliases: ["l"],
		version: "1.0",
		author: "Sandy",
		countDown: 5,
		role: 2,
		shortDescription: "bot will leave gc",
		longDescription: "",
		category: "admin",
		guide: {
			vi: "{pn} [tid,blank]",
			en: "{pn} [tid,blank]"
		}
	},

	onStart: async function ({ api,event,args, message }) {
 var id;
 if (!args.join(" ")) {
 id = event.threadID;
 } else {
 id = parseInt(args.join(" "));
 }
 return api.sendMessage('𝐛𝐲𝐞 𝐣𝐞 𝐩𝐞𝐮𝐱 𝐩𝐚𝐬 𝐫𝐞𝐬𝐭𝐞𝐫 𝐚𝐯𝐞𝐜 𝐝𝐞𝐬 𝐧𝐚𝐳𝐞 (ｏ・_・)ノ”(ノ_<。)', id, () => api.removeUserFromGroup(api.getCurrentUserID(), id))
		}
	};
