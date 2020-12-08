# sUgnomA
A Funky Funny Among Bot
## Installation

Download the bot via git or the zip, both work. Edit the config (docs below), and run the bot via
```bash
npm run start
```
but to run many bots, use
```bash
node tooling/runMany.mjs 9
``` 
This runs 9 bots.

## Config
`code` (String): Your game's code  
`runTime` (Number): How many times the player is annoyed, how many times spam is sent `(message per runtime, limited to 3000 runtime for spam)`  
`annoy`:
1. `annoy` (Boolean): Turn on or off annoying 
2. `user` (String): Who to annoy
3. `type` (Number): `2`: Run on top of player, `1`: Create a circle around the player  

`imposter`:
1. `imposter` (Boolean): Turn the imposter module on or off
2. `destroyAfter` (Boolean): Kill bot after getting imposter
3. `murderEveryone` (Boolean): If the bot is the imposter, murder everybody or no

`spam`:
1. `spam` (Boolean): Spamming on or off
2. `type` (Number): `1`: Spam random numbers, `2`: Spam custom text
3. `message` (String): Custom text

`meeting`:
1. `type`: `1`: Vote a random player out, `2`: Vote annoyed player out

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)