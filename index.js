const discord = require("discord.js");
const fs = require("fs");
const client = new discord.Client();
let token = "NDExMjEzNDA3MjQ1NTY1OTUy.Xc7frg.zgK54rA28DM6ThPwePDrCk-uh5o";
let pref = ">";

//twitter copyright interval
setInterval(renewFile, 604800000);
function renewFile(){
    fs.writeFileSync("tweetdirect.txt", "");
    console.log("deleted directory");
}

client.on("ready", function(){
    client.user.setActivity("ur nan | >help");
});

client.on("message", async function(msg){
    if(msg.author.bot){
        return;
    }

    if(msg.author.id === "98213223676801024"){//tyler blacklist
        const emoteSkell = msg.guild.emojis.cache.find(emoji=>emoji.name==="Skell");
        if(msg.content.includes(emoteSkell)){
            if(!msg.guild) return;

            if(msg.member.voice.channel){
                await msg.member.voice.channel.join().then(connection=>{
                    const dispatcher = connection.play("./sounds/rawr.mp3");
                    dispatcher.setVolume(0.5);
                    dispatcher.on("finish", ()=>{
                        msg.member.voice.channel.leave();
                    });
                }).catch(console.log);
            }else{
                await msg.reply("you need to be in vc");
            }
        }
        return;
    }

    if(msg.content.toLowerCase().includes("darkness")){
        await msg.reply("ė̴̺x̷̛͗ȋ̷̍s̷͈̋t̸̖́ĕ̸͖n̸͌͐t̷͊͗i̴̓͗a̸͛̿l̷͂͊ ̷̈́̆s̴͊̅u̴͒̄f̶̠̈́f̴̿̚ȅ̴͒r̵͑̿i̸̅̌n̷̈́͠g̴̡̛");
    }

    if(msg.content.indexOf(pref) !== 0){
        //tweet plagerism check lol
        if(msg.content.startsWith("https://twitter.com")){
            let tweetArr = fs.readFileSync("tweetdirect.txt").toString().split("\n");
            for(let i = 0; i<=tweetArr.length; i++){
                if(msg.content === tweetArr[i]){
                    if(msg.author.id === "163458269103390721"){
                        await msg.reply("david stop fucking using internet explorer");
                    }
                    await msg.reply("someone already sent this you fool.");
                    return;
                }
            }
            await fs.appendFileSync("tweetdirect.txt", msg.content + "\n");
        }
    }

    let args = msg.content.slice(pref.length).trim().split(/ + /g).shift().toLowerCase();

    if(args === "ping"){
        await msg.reply("pong");
    }

    if(args === "help"){
        const helpEmb = new discord.MessageEmbed(this, 'client');
        helpEmb.setColor("#8000ff");
        helpEmb.setTitle("Commands");
        helpEmb.setDescription(">spotify\n >friendcodes\n >soundboard\n");
        helpEmb.setThumbnail("https://purepng.com/public/uploads/medium/purepng.com-hammerhammerscoldstrike-agairon-hammer-1701527869673yd3ts.png");

        await msg.channel.send(helpEmb);
    }

    if(args === "soundboard"){
        const soundEmb = new discord.MessageEmbed();
        soundEmb.setColor("#8000ff");
        soundEmb.setTitle("available sounds");
        soundEmb.setDescription(">it'slit\n >wow\n >straightup\n >youwhat\n >uhoh\n >gameboy\n >yellowtape");
        soundEmb.setThumbnail("https://cdn.clipart.email/5f8ce79d0a8ea0a17037ddc027def66c_music-notes-clipart-colorful-clipart-panda-free-clipart-images_228-300.png");
        await msg.channel.send(soundEmb);
    }

    if(args === "friendcodes"){
        let fcodes = fs.readFileSync("fcodes.txt").toString().split("\n");

        const ninEmb = new discord.MessageEmbed();
        ninEmb.setColor("#e4000f");
        ninEmb.setTitle("Nintendo Switch Online Friend Codes");
        ninEmb.setDescription(fcodes);
        ninEmb.setThumbnail("https://seeklogo.net/wp-content/uploads/2016/10/nintendo-switch-logo-preview-400x400.png");
        await msg.channel.send(ninEmb);
    }

    if(args === "spotify"){
        let spotify = fs.readFileSync("spotify.txt").toString().split("\n");

        const spotEmb = new discord.MessageEmbed();
        spotEmb.setColor("#1db954");
        spotEmb.setTitle("Owed for Spotify");
        spotEmb.setDescription("Ryan: $"+spotify[0]+"\n Tharsan: $"+spotify[1]+"\n Manraaj: $"+spotify[2]+"\n Tyler: $"+spotify[3]);
        spotEmb.setThumbnail("https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png");
        await msg.channel.send(spotEmb);
    }
    if(msg.author.id === "98213223676801024"){//tyler blacklist
        return;
    }

    if(args === "leavevc"){
        await msg.member.voice.channel.leave();
    }

    if(args === "stnraightup"){
        if(!msg.guild) return;

        if(msg.member.voice.channel){
            await msg.member.voice.channel.join().then(connection=>{
                const dispatcher = connection.play("./sounds/str8up.wav", {volume:0.5});
                dispatcher.setVolume(0.5);
                dispatcher.on("finish", ()=>{
                    msg.member.voice.channel.leave();
                });
            }).catch(console.log);
        }else{
            await msg.reply("you need to be in vc");
        }
    }

    if(args === "it'slit"){
        if(!msg.guild) return;

        if(msg.member.voice.channel){
            await msg.member.voice.channel.join().then(connection=>{
                const dispatcher = connection.play("./sounds/itslit.mp3");
                dispatcher.setVolume(0.5);
                dispatcher.on("finish", ()=>{
                    msg.member.voice.channel.leave();
                });
            }).catch(console.log);
        }else{
            await msg.reply("you need to be in vc");
        }
    }

    if(args === "wow"){
        if(!msg.guild) return;

        if(msg.member.voice.channel){
            await msg.member.voice.channel.join().then(connection=>{
                const dispatcher = connection.play("./sounds/wow.mp3");
                dispatcher.setVolume(0.5);
                dispatcher.on("finish", ()=>{
                    msg.member.voice.channel.leave();
                });
            }).catch(console.log);
        }else{
            await msg.reply("you need to be in vc");
        }
    }

    if(args === "youwhat"){
        if(!msg.guild) return;

        if(msg.member.voice.channel){
            await msg.member.voice.channel.join().then(connection=>{
                const dispatcher = connection.play("./sounds/youwhat.mp3");
                dispatcher.setVolume(0.5);
                dispatcher.on("finish", ()=>{
                    msg.member.voice.channel.leave();
                });
            }).catch(console.log);
        }else{
            await msg.reply("you need to be in vc");
        }
    }

    if(args === "uhoh"){
        if(!msg.guild) return;

        if(msg.member.voice.channel){
            await msg.member.voice.channel.join().then(connection=>{
                const dispatcher = connection.play("./sounds/uhoh.mp3");
                dispatcher.setVolume(0.5);
                dispatcher.on("finish", ()=>{
                    msg.member.voice.channel.leave();
                });
            }).catch(console.log);
        }else{
            await msg.reply("you need to be in vc");
        }
    }

    if(args === "gameboy"){
        if(!msg.guild) return;

        if(msg.member.voice.channel){
            await msg.member.voice.channel.join().then(connection=>{
                const dispatcher = connection.play("./sounds/gameboy.mp3");
                dispatcher.setVolume(0.5);
                dispatcher.on("finish", ()=>{
                    msg.member.voice.channel.leave();
                });
            }).catch(console.log);
        }else{
            await msg.reply("you need to be in vc");
        }
    }

    if(args === "yellowtape"){
        if(!msg.guild) return;

        if(msg.member.voice.channel){
            await msg.member.voice.channel.join().then(connection=>{
                const dispatcher = connection.play("./sounds/yellowtape.mp3");
                dispatcher.setVolume(0.5);
                dispatcher.on("finish", ()=>{
                    msg.member.voice.channel.leave();
                });
            }).catch(console.log);
        }else{
            await msg.reply("you need to be in vc");
        }
    }
});


client.login(token);