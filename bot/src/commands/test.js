import { SlashCommandBuilder } from '@discordjs/builders';

const testCommand = new SlashCommandBuilder()
    .setName('test')
    .setDescription('Slash command used for testing')
    .addUserOption( (option) => option.setName('user').setDescription("I don't know"))

export default testCommand.toJSON();