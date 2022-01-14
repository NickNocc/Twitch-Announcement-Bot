const tmi = require('tmi.js');
require('dotenv').config();

const client = new tmi.Client({
	options: { debug: true },
	identity: {
		username: process.env.TWITCH_USERNAME,
		password: process.env.TWITCH_OAUTH,
	},
	channels: [ 'NickNocc' ]
});

client.connect();

client.on('message', (channel, tags, message, self) => {
	const isNotBot = tags.username.toLocaleLowerCase() !== process.env.TWITCH_USERNAME;

	if (isNotBot) {
		client.say(channel, message)
	}
	
});