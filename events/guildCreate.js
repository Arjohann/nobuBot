var client;
exports.init = (init) => {
  client = init;
}
exports.exec = (guild) => {
  if (client.config.logChannel && (channel = client.bot.channels.get(client.config.logChannel))) channel.sendMessage("Bot has been added to server " + guild + " (ID: " + guild.id + ")");
}