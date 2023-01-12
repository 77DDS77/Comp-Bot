import { SlashCommandBuilder } from "@discordjs/builders";

/**
 * This slash command asks the user to write six strings (players' names). 
 * It's handled in the index.js via the `shufflePlayers()` function.
 * Returns the command in its JSON format.
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
