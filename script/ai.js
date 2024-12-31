const axios = require('axios');
module.exports.config = {
  name: 'chesca',
  version: '1.0.0',
  role: 0,
  hasPrefix: false,
  aliases: ['gpt', 'openai'],
  description: "An AI command powered by GPT-4",
  usage: "Ai [promot]",
  credits: 'Developer',
  cooldown: 3,
};
module.exports.run = async function({
  api,
  event,
  args
}) {
  const input = args.join(' ');
  if (!input) {
    api.sendMessage(`🔎Hello botscope Ai

━━━━━━━━━━━━━━━

 𝑷𝑳𝑬𝑨𝑺𝑬 𝑷𝑹𝑶𝑽𝑰𝑫𝑬 𝑨 𝑸𝑼𝑬𝑺𝑻𝑰𝑶𝑵/𝑸𝑼𝑬𝑹𝒀 𝑻𝑶 𝑩𝑬 𝑨𝑵𝑺𝑾𝑬𝑹 𝑩𝒀 𝑽𝑰𝑵𝑪𝑬𝑵𝑻 𝑨𝑺𝑺𝑰𝑺𝑻𝑨𝑵𝑻`, event.threadID, event.messageID);
    return;
  }
  api.sendMessage(`🔍🆂🅴🅰🆁🅲🅷🅸🅽🅶 🅿🅻🅴🅰🆂🅴 🆆🅰🅸🆃.... "${input}"`, event.threadID, event.messageID);
  try {
    const {
      data
    } = await axios.get(`https://openaikey-x20f.onrender.com/api?prompt=${encodeURIComponent(input)}`);
    const response = data.response;
    api.sendMessage(response, event.threadID, event.messageID);
  } catch (error) {
    api.sendMessage('An error occurred while processing your request.', event.threadID, event.messageID);
  }
};
