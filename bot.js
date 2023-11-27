import { Client, Events, GatewayIntentBits } from 'discord.js';
import { config } from 'dotenv';
import * as fuck from './commands/fuck.js';
import * as spam from './commands/spam.js';

config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

async function handleInteraction(thing) {
  if (!thing.isCommand()) return;
  if (thing.commandName === 'fuck') {
    await fuck.execute(thing);
  }
  if (thing.commandName === 'spam') {
    await spam.execute(thing);
  }
}

client.once(Events.ClientReady, () => {
  console.log("we're frickin on");
});
client.login(process.env.TOKEN);

client.on(Events.InteractionCreate, handleInteraction);
