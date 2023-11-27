import { SlashCommandBuilder } from 'discord.js';

export let data = new SlashCommandBuilder()
  .setName('fuck')
  .setDescription('says fuck');

export async function execute(thing) {
  await thing.reply('FUCK');
}
