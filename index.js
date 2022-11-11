const { CommandClient } = require('eris')

// Stupid ass bot creation
async function init(token) {
    const stupidAssBot = new CommandClient(`Bot ${token}`, { intents: ['guilds'], maxShards: 'auto',restMode: true })
    // Register the stupid ass command
    stupidAssBot.on('ready', async () => {
        await stupidAssBot.bulkEditCommands([{
            name: 'lol',
            description: 'BING CHILLING',
            type: 1,
        }])
        console.log(`Paste the URL below into your browser to invite your bot!\nhttps://discord.com/oauth2/authorize?client_id=${stupidAssBot.user.id}&scope=applications.commands%20bot&permissions=3072`)
    })
    // Stupid ass interaction creation event
    stupidAssBot.on('interactionCreate', async (interaction) => {
        if (interaction?.data?.name === 'lol') {
            await interaction.createMessage({
                content: 'Pablo has always been a really skeptical character throughout the whole series of the backyardigans. Pablo the penguin is very timid and suspicious and I feel like he’s hiding some secrets behind the backyard. One of Pablo the penguins alter egos is king Pablo, which Pablo Escobar the Colombian drug lord is dubbed as the “king of cocaine”. The first episode of the show was produced on October 11, 2004, a month after the documentary the Private archives of Pablo Escobar on September 9, 2004, coincidence? I think not. According to the Backyardigans fandom wiki “Pablo undergoes a "panic attack" in nearly every episode of the first season.” Which is interesting because Pablo Escobar ended up surrendering to authorities and was probably distressed In that situation like Pablo the penguin in the first season. Escobar also imported hippopotamuses to Colombia, coincidentally there is a yellow hippopotamus in the Backyardigans named Tasha who plays a big role in the show. Now I know this information is a bit scrambled but i do believe the narcoterrorist and the penguin do have some connection. Zǎoshang hǎo zhōngguó xiànzài wǒ yǒu BING CHILLING 🥶🍦 wǒ hěn xǐhuān BING CHILLING 🥶🍦 dànshì sùdù yǔ jīqíng 9 bǐ BING CHILLING 🥶🍦 sùdù yǔ jīqíng sùdù yǔ jīqíng 9 wǒ zuì xǐhuān suǒyǐ…xiànzài shì yīnyuè shíjiān zhǔnbèi 1 2 3 liǎng gè lǐbài yǐhòu sùdù yǔ jīqíng 9 ×3 bùyào wàngjì bùyào cu òguò jìdé qù diànyǐngyuàn kàn sùdù yǔ jīqíng 9 yīn wéi fēicháng hǎo diànyǐng dòngzuò fēicháng hǎo chàbùduō yīyàng BING CHILLING 🥶🍦zàijiàn 🥶🍦 Castaways, we are castaways https://static.wikia.nocookie.net/thebackyardigansencyclopedia/images/c/c7/Pablo_Turnaround.gif https://cdn.discordapp.com/attachments/947643121964048404/1040687101999591444/videoplayback.mp4 https://media.tenor.com/RvBPEdvCqHkAAAAd/social-credit.gif '
            })
            console.log('Self destructing...')
            process.exit(0)
        }
    })
    stupidAssBot.connect();
}

const tokenFromStupidCommand = process.argv[2]
init(tokenFromStupidCommand);
