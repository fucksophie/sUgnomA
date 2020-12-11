/* jslint es6 node */

import Debug from "debug";
import events from "events";

events.EventEmitter.defaultMaxListeners = 0;

import {
    AmongusClient,
    MasterServers,
} from "amongus-protocol";

import config from "./config.mjs";

const server = MasterServers.EU[0];

const client = new AmongusClient({debug: false});

const debug = Debug("sUgnomA");

if(config.runTime < 3000 && config.spam.spam) {
    throw "To have spam enabled, your runtime has to be 3500 or higher.";
};

async function start() {
    await client.connect(server[0], server[1], "sUgnomA");

    const game = await client.join(config.code);
    debug(`Connected to ${config.code}`);

    game.on("setImposters", (imposters)=>{
        if(config.imposter.murderEveryone) {
            if(game.me.isImposter) {
                for (let [clientid, client] of game.clients) {
                    game.me.murder(client);
                    debug(`Killing ${client.name}`);
                }
            }
        }

        if(config.imposter.imposter) {
            if(game.imposters.length) {
                debug(`The imposter/s is/are ${game.imposters.map(i=>i.name).join(", ")}`)

                if(config.imposter.destroyAfter) {
                    process.exit(0)
                }
            }
        }

    });

    game.on("meeting", ()=>{
        setTimeout(()=>{
            if(config.meeting.type === 1) {
                const playerArray = Array.from(game.clients);
                const randomPlayer = playerArray[Math.floor(Math.random() * playerArray.length)][1];

                game.me.vote(randomPlayer)
                debug(`Voting out ${randomPlayer.name}`)
            } else {
                game.me.vote(game.getClientByName(config.annoy.user))
                debug(`Voting out ${config.annoy.user}`)
            }
        }, 20000)
    })

    game.on("chat", (player, message) => {
        if(config.chat.chat) {
            const args = message.split(" ");
            const command = args.shift();
            const prefix = config.chat.prefix;

            if(player.name === config.chat.owner) {
                if(command === prefix + "eval") {
                    eval(args.join(" "))
                } else if (command === prefix + "ping") {
                    game.me.chat("sUgnomA running!")
                } else if (command === prefix + "annoy") {
                    config.annoy.user = args[0]
                }
            }
        }
    })

    game.me.once("spawn", () => {
        setInterval(async ()=>{
            const name = config.names[Math.floor(Math.random() * config.names.length)];
            game.me.setName(name)
            game.me.setColor(Math.floor(Math.random() * 11));
            game.me.setHat(Math.floor(Math.random() * 93));
            game.me.setPet(Math.floor(Math.random() * 10))
            game.me.setSkin(Math.floor(Math.random() * 15))

            if(config.spam.spam) {
                switch(config.spam.type) {
                    case 1:
                    default:
                        game.me.chat(Math.floor(Math.random() * 100000).toString())
                        break;
                    case 2:
                        game.me.chat(config.spam.message);
                        break;
                }
            }

            for (let [clientid, client] of game.clients) {
                await client.awaitSpawn();

                const vec = client.Player.CustomNetworkTransform;

                if(config.annoy.annoy) {
                    if(client.name === config.annoy.user) {
                        if(config.annoy.type == 1) {

                            const radius = 2;
                            let x = vec.position.x
                            let y = vec.position.y

                            var angle = Math.random()*Math.PI*2;

                            let mx = Math.cos(angle)*radius;
                            let my = Math.sin(angle)*radius;

                            const newPos = {
                                x: mx+x,
                                y: my+y,
                            }

                            game.me.move(newPos, vec.velocity)
                        } else {
                            game.me.move(vec.position, vec.velocity);
                        }
                    }
                }
            }
        }, config.runTime)
    })
}

start()
