import { EmbedBuilder } from "discord.js";

const LEGENDS = [
    "Ash", "Bangalore", "Catalyst", "Caustic",
    "Crypto", "Fuse", "Gibraltar", "Horizon",
    "Lifeline", "Octane", "Mad Maggie", "Loba",
    "Mirage", "New Castle", "Pathfinder", "BloodHound",
    "Rampart", "Revenant", "Seer", "Valkyrie",
    "Vantage", "Wattson", "Wraith"
]

export function compCreate(grupType){
    //random number generator
    const chooseRandom = (arr) => {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    if(grupType === 'trio'){

        let selected = new Set();
        while (selected.size < 3) {
            selected.add(chooseRandom(LEGENDS));
        }
        console.log(Array.from(selected));
        const embedReply = makeEmbed(Array.from(selected))
        return embedReply;

    }else if(grupType === 'duo'){

        let selected = new Set();
        while (selected.size < 2) {
            selected.add(chooseRandom(LEGENDS));
        }
        console.log(Array.from(selected));
        const embedReply = makeEmbed(Array.from(selected))
        return embedReply;
    }
}


function makeEmbed(randomComp){
    if(randomComp.length == 2){
        const embed = new EmbedBuilder()
            .setTitle("RANDOM DUO COMP")
            .addFields(
                {
                    name: `Legend 1:`,
                    value: `${randomComp[0]}`
                },
                {
                    name: `Legend 2:`,
                    value: `${randomComp[1]}`
                }
            )
        
        return embed;
    }else if(randomComp.length == 3){
        const embed = new EmbedBuilder()
            .setTitle("RANDOM TRIO COMP")
            .addFields(
                {
                    name: `Legend 1:`,
                    value: `${randomComp[0]}`
                },
                {
                    name: `Legend 2:`,
                    value: `${randomComp[1]}`
                },
                {
                    name: `Legend 3:`,
                    value: `${randomComp[2]}`
                }
                
            )
        
        return embed;
    }
}

/* FOR V2, sending three msgs with img attached
const LEGENDS_2 = [
    {name: 'Ash', image: ''},
    {name: 'Bangalore', image: ''},
    {name: 'Catalyst', image: ''},
    {name: 'Caustic', image: ''},
    {name: 'Crypto', image: ''},
    {name: 'Fuse', image: ''},
    {name: 'Gibraltar', image: ''},
    {name: 'Horizon', image: ''},
    {name: 'Lifeline', image: ''},
    {name: 'Octane', image: ''},
    {name: 'Mad Maggie', image: ''},
    {name: 'Mirage', image: ''},
    {name: 'New Castle', image: ''},
    {name: 'Pathfinder', image: ''},
    {name: 'BloodHound', image: ''},
    {name: 'Rampart', image: ''},
    {name: 'Revenant', image: ''},
    {name: 'Valkyrie', image: ''},
    {name: 'Seer', image: ''},
    {name: 'Vantage', image: ''},
    {name: 'Wattson', image: ''},
    {name: 'Wraith', image: ''}
]*/