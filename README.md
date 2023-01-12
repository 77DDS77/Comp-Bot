# APEX LEGENDS DISCORD BOT
### My very first bot, and I'm proud of it!

As an Apex Legends fan and hardcore gamer I decided to create a Discord Bot that 
generates a random DUO or TRIO squad to spice up the gamplay experience!

The bot is written with [Discord.js](https://www.npmjs.com/package/discord.js) v14.7.1 with the help of [dotenv](https://www.npmjs.com/package/dotenv) 
for the environmental variables and [nodemon](https://www.npmjs.com/package/nodemon) for an easier node.js development experience.

It has a very simple usage, basically after prompting the "/comp" command it will show you
a select menu from where you must select either DUO or TRIO, based on your request it will respond 
with an embed message containing your randomly generated squad.

## UPDATE

- The /comp command has been improved, now instead of responding using a single boring embed message with only
the names of the Lengeds it uses a message for Legend with its corresponding name and image.
- Now we have private Arena matches in Apex Legends, so I created a simple command that takes six names,
shuffles them and splits them into two separate teams.






