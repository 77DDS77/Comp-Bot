import { EmbedBuilder } from "discord.js";

/**
 * Takes an array of six strings (players' names),
 * then shuffles them and splits them into two separate teams.
 * 
 * @param {*} players - String[] containing the players' names.
 * @returns EmbedBuilder[] - Array of EmbedMessages containig the two teams.
 */
export function shufflePlayers(players) {
    // Shuffle the players array (Fisher-Yates shuffle)
    for (let i = players.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [players[i], players[j]] = [players[j], players[i]];
    }

    // Split the shuffled players array into two separate arrays
    let squad1 = players.slice(0, 3);
    let squad2 = players.slice(3);

    return makeEmbeds(squad1, squad2);;
}


/**
 * Creates the actual embed messages to be handled in the
 * main command handling function.
 * 
 * @param {*} squad1 - String array containing the randomly shuffled players name.
 * @param {*} squad2 - String array containing the randomly shuffled players name.
 * @returns EmbedBuilder[] - Array of EmbedMessages.
 */
function makeEmbeds(squad1, squad2){

    const embedSquad1 = new EmbedBuilder()
        .setTitle("--- TEAM 1 ---")
        .addFields(
            {
                name: `Player 1:`,
                value: `${squad1[0]}`
            },
            {
                name: `Player 2:`,
                value: `${squad1[1]}`
            },
            {
                name: `Player 3:`,
                value: `${squad1[2]}`
            }
        );

    const embedSquad2 = new EmbedBuilder()
        .setTitle("--- TEAM 2 ---")
        .addFields(
            {
                name: `Player 1:`,
                value: `${squad2[0]}`
            },
            {
                name: `Player 2:`,
                value: `${squad2[1]}`
            },
            {
                name: `Player 3:`,
                value: `${squad2[2]}`
            }
        );

    let embeds = [embedSquad1, embedSquad2]
    
    return embeds;
}