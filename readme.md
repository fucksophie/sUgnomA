# sUgnomA
A Funky Funny Among Bot
## Installation

1. Download the bot via the zip or git
2. Unpack the zip if downloaded via zip
3. Change `src/config.mjs` to your own config (config docs below)
4. Then, to run the bot, if you're running Windows, the command
to start the bot is
```bash
npm run start:win
``` 
but if you're running linux, use
```bash
npm run start:linux
```
To run many bots (works on both linux and windows), use
```bash
node tooling/runMany.mjs 2
```
This will run 2 bots!

## Config
`code` (String): Your game's code  
`runTime` (Number): How many times the player is annoyed, how many times spam is sent (message per runtime, limited to 3000 runtime for spam)

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

`chat`:
1. `chat` (Boolean): Turn on or off the chat module
2. `owner` (String): Who owns the bot
3. `prefix` (String): Set the prefix for the chat module

`meeting`:
1. `type` (Number): `1`: Vote a random player out, `2`: Vote annoyed player out

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License
[MIT](https://choosealicense.com/licenses/mit/)