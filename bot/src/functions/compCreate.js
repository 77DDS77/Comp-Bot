import { EmbedBuilder, AttachmentBuilder } from "discord.js";

/* FOR V2, sending three msgs with img attached*/
const LEGENDS = [
    {name: 'Ash', image: 'https://styles.redditmedia.com/t5_51pt9a/styles/communityIcon_sxjvqatfbhu71.jpg?width=256&s=0074492b03bd286449e90ad85260cda3db914f34'},
    {name: 'Bangalore', image: 'https://pbs.twimg.com/media/Fjw1PI_akAE3sn7.png'},
    {name: 'Catalyst', image: 'https://styles.redditmedia.com/t5_61jzzl/styles/communityIcon_o8ot521e8ou91.png'},
    {name: 'Caustic', image: 'https://pbs.twimg.com/media/Fjw1Tu0aYAAJYLW.png'},
    {name: 'Crypto', image: 'https://pbs.twimg.com/media/Fjw1TvQaYAAgF7g.png'},
    {name: 'Fuse', image: 'https://external-preview.redd.it/PYZn0FqmZsS6m0ps780gaUDbQN_D7i1ZNZ-Ywz4ElbU.jpg?auto=webp&s=2ebbb9ee41c5f16d2bd1a1e4ec2ad1a6ce8e3cdf'},
    {name: 'Gibraltar', image: 'https://cdn141.picsart.com/370986559006201.jpg?type=webp&to=crop&r=256'},
    {name: 'Horizon', image: 'https://steamuserimages-a.akamaihd.net/ugc/1807607700386946945/37992550748D1576EB950CF691AF87EE490C77EB/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'},
    {name: 'Lifeline', image: 'https://images.squarespace-cdn.com/content/5616ac17e4b018d366f57f53/1606323583845-5S5750W35FRG1DJOU994/LOGO.png?content-type=image%2Fpng'},
    {name: 'Octane', image: 'https://avatarfiles.alphacoders.com/313/thumb-350-313627.jpg'},
    {name: 'Mad Maggie', image: 'https://external-preview.redd.it/RHK5TwOVPbk0XDUCTta1Tu8qJSzU2qownim8dxWOwSk.jpg?auto=webp&s=99c8639fff7a13c1331007f76aeebf93948bb226'},
    {name: 'Mirage', image: 'https://external-preview.redd.it/NcOVDl883q4N7q2wveTd99dl8KLi9LlH65U-z4oFVU4.jpg?auto=webp&s=7ac4c6b040c582e227cdcd37f85c9aa4d67151b9'},
    {name: 'New Castle', image: 'https://styles.redditmedia.com/t5_2t42cq/styles/communityIcon_gv8k3m1u33y81.png'},
    {name: 'Pathfinder', image: 'https://pbs.twimg.com/media/Fjw1c6RaAAA9MN-.png'},
    {name: 'BloodHound', image: 'https://steamuserimages-a.akamaihd.net/ugc/1747932895688998632/C4C6B887FA7EB163D544E2D439B705E1CFC27271/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'},
    {name: 'Rampart', image: 'https://styles.redditmedia.com/t5_2cu59y/styles/communityIcon_ffx92inli6w81.png'},
    {name: 'Revenant', image: 'https://steamuserimages-a.akamaihd.net/ugc/1758064962799064290/D4FEB9CE4A70E06EB9B043FB99C7CA5DE575D785/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'},
    {name: 'Valkyrie', image: 'https://trackercdn.com/cdn/apex.tracker.gg/legends/portraits/valkyrie.png'},
    {name: 'Seer', image: 'https://styles.redditmedia.com/t5_35e9f2/styles/communityIcon_4kujkwskq6c71.png'},
    {name: 'Vantage', image: 'https://external-preview.redd.it/YVj5_gVKg7iKUxxwnZ75HlnqIn0uXjkx7m5_D-S5r54.jpg?auto=webp&s=c50f8d60055080d13eaf17a183bb767d6d652a62'},
    {name: 'Wattson', image: 'https://styles.redditmedia.com/t5_2s9twq/styles/communityIcon_4xhf3ogcab651.png'},
    {name: 'Wraith', image: 'https://styles.redditmedia.com/t5_3nrk6/styles/communityIcon_6pugjf8ezht41.png'}
]

/**
 * Create a randomly generated DUO or TRIO squad and directly returns
 * an array of EmbedMessages to be handled in the main command handling function.
 * 
 * @param {*} grupType string - either "duo" or "trio".
 * @returns EmbedBuilder[] - Discord embed messages array.
 */
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
        const embedReply = makeEmbed(Array.from(selected))
        return embedReply;

    }else if(grupType === 'duo'){

        let selected = new Set();
        while (selected.size < 2) {
            selected.add(chooseRandom(LEGENDS));
        }
        const embedReply = makeEmbed(Array.from(selected))
        return embedReply;
    }
}

/**
 * Creates the actual embed message to be handled in the
 * main command handling function.
 * 
 * @param {*} randomComp - String array containing the randomly generated Legends names.
 * @returns EmbedBuilder - Discord Embed message object.
 */
function makeEmbed(randomComp){

    const embedGroup = [];

    for(let i = 0; i < randomComp.length; i++){

        const embed = new EmbedBuilder()
            .setTitle(`${randomComp[i].name}`)
            .setImage(`${randomComp[i].image}`)

        embedGroup.push(embed);
    
    };
    
    return embedGroup;

}

