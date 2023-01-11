import { SlashCommandBuilder } from '@discordjs/builders';

/**
 * Defines the behaviour of the /test command.
 * Its main purpose is to show wether the bot is working or not.
 */
const testCommand = new SlashCommandBuilder()
    .setName('test')
    .setDescription('Slash command used for testing')
    .addUserOption( (option) => option.setName('user').setDescription("Used for development."))

/*
Exporting it as a JSON object for compatibility
*/
export default testCommand.toJSON();