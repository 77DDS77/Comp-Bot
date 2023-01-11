import { Client, GatewayIntentBits, Routes } from 'discord.js';
import { config } from 'dotenv';
import { REST } from '@discordjs/rest';
import TestCommand from './commands/test.js'
import RandomComp from './commands/randomComp.js';
import { compCreate } from './functions/compCreate.js';


config(); //need it for reading the environmental variables
const TOKEN = process.env.COMP_BOT_TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const GUILD_ID = process.env.GUILD_ID;

//Setting up the bot intents
const client = new Client({
    intents:[
        GatewayIntentBits.GuildBans,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
})

const rest = new REST({ version: '10' }).setToken(TOKEN);

client.login(TOKEN);

client.on('ready', () => {
    console.log("COMP BOT ONLINE");
});

client.on('interactionCreate', (interaction) => {
    if(interaction.isChatInputCommand()){
        
        //Handling the commands
        if(interaction.commandName === 'test'){
            console.log('TEST COMMAND LAUNCHED');
            console.log("-------------------");
            console.log(interaction.options);
            console.log("-------------------");
            interaction.reply({content: 'Hi tester'})
        }
        if(interaction.commandName === 'comp'){
            console.log('COMP COMMAND LAUNCHED');
            console.log("-------------------");
            const reply = compCreate(interaction.options.get('group').value);
            console.log("-------------------");
            interaction.reply({embeds: [reply]})
        }

    };
});

//MAIN
async function main(){

    //defining my slash Commands
    const COMMANDS = [TestCommand, RandomComp];

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