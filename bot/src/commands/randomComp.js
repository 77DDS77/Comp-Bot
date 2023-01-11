import { SlashCommandBuilder } from '@discordjs/builders';

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

export default randomComp.toJSON();