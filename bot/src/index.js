import { Client, GatewayIntentBits, Routes } from 'discord.js';
import { config } from 'dotenv';
import { REST } from '@discordjs/rest';
import { compCreate } from './functions/compCreate.js';
import { shufflePlayers } from './functions/shufflePlayers.js';
import TestCommand from './commands/test.js'
import RandomComp from './commands/randomComp.js';
import ShuffleSquad from './commands/shuffleSquad.js';


/**
 * need it for reading the environmental variables from the .env file
 * */
config(); 
const TOKEN = process.env.COMP_BOT_TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const GUILD_ID = process.env.GUILD_ID;

//Setting up the bot intents
const client = new Client({
    intents:[
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildBans,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
})

/**
 * The REST class allows you to interact with the Discord API using a simplified API, rather than making raw HTTP requests.
 */
const rest = new REST({ version: '10' }).setToken(TOKEN);

// Makes the Bot available to the Discord server
client.login(TOKEN);

// Logs when the bot is ready and available
client.on('ready', () => {
    console.log("COMP BOT ONLINE");
});

// Interaction/slash commands handling
client.on('interactionCreate', (interaction) => {
    if(interaction.isChatInputCommand()){
        
        //Handling for the /test command
        if(interaction.commandName === 'test'){
            console.log('TEST COMMAND LAUNCHED');
            console.log("-------------------");
            console.log(interaction.options);
            console.log("-------------------");
            interaction.reply({content: 'Hi tester'})
        }
        //Handling for the /comp command
        if(interaction.commandName === 'comp'){
            console.log('COMP COMMAND LAUNCHED');
            console.log("-------------------");
            const reply = compCreate(interaction.options.get('group').value);
            console.log("-------------------");
            interaction.reply({embeds: reply})
        }
        }

    };
});

//MAIN
async function main(){

    // Defining the slash commands available to the server
    const COMMANDS = [TestCommand, RandomComp, ShuffleSquad];

    try{
        console.log('Started refreshing application (/) commands.');
        await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {
            body: COMMANDS
        });
    }catch(err){
        console.error(err);
    }
}

main();