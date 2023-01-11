import { SlashCommandBuilder } from '@discordjs/builders';

/**
 * Defines the behaviour of the /comp command.
 * Basically I'm giving it a name and a set of String options
 * that will be shown as a select menu in the Discord UI.
 */
const randomComp = new SlashCommandBuilder()
    .setName('comp')
    .setDescription('Create a random comp for duo or trio')
    .addStringOption((option) => 
        option
            .setName('group')
            .setDescription('Set if the comp is for a trio or duo group')
            .setRequired(true)
            .setChoices(
                {name: 'Duo', value: 'duo'},
                {name: 'Trio', value: 'trio'}
            )
    )

/*
Exporting it as a JSON object for compatibility
*/
export default randomComp.toJSON();