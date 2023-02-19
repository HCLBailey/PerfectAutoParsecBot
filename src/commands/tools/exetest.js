const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("runit")
    .setDescription("test launching an exe"),
  async execute(interaction, client) {
    const message = await interaction.deferReply({
      fetchReply: true,
    });

    const { execFile } = require("child_process");

    const child = execFile("rsclient.exe", [], (error, stdout, stderr) => {
      if (error) {
        throw error;
      }
      console.log(stdout);
    });

    const newMessage = `EXE Launched`;
    await interaction.editReply({
      content: newMessage,
    });
  },
};
