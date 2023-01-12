import { SlashCommandBuilder } from "@discordjs/builders";

/**
 * Defines the behaviour of the /comp command.
 * Basically I'm giving it a name and a set of String options
 * that will be shown as a select menu in the Discord UI.
 */
const shuffleSquad = new SlashCommandBuilder()
    .setName("shuffle")
    .setDescription("Shuffle 6 players in two different squads")
    .addStringOption((option) =>
        option
            .setName("player1")
            .setDescription("First player")
            .setRequired(true)
    )
    .addStringOption((option) =>
        option
            .setName("player2")
            .setDescription("Second player")
            .setRequired(true)
    )
    .addStringOption((option) =>
        option
            .setName("player3")
            .setDescription("Third player")
            .setRequired(true)
    )
    .addStringOption((option) =>
        option
            .setName("player4")
            .setDescription("Fourth player")
            .setRequired(true)
    )
    .addStringOption((option) =>
        option
            .setName("player5")
            .setDescription("Fifth player")
            .setRequired(true)
    )
    .addStringOption((option) =>
        option
            .setName("player6")
            .setDescription("Sixth player")
            .setRequired(true)
    );

/*
Exporting it as a JSON object for compatibility
*/
export default shuffleSquad.toJSON();
