import { SlashCommandBuilder } from 'discord.js';

export let data = new SlashCommandBuilder()
  .setName('spam')
  .setDescription('spam someone')
  .addUserOption((option) =>
    option
      .setName('target')
      .setDescription('Person you wanna spam.')
      .setRequired(true)
  )
  .addStringOption((option) =>
    option
      .setName('message')
      .setDescription('Message you wanna send.')
      .setRequired(true)
  )
  .addIntegerOption((option) =>
    option
      .setName('repetitions')
      .setDescription('How many times do you wanna send it?')
      .setRequired(true)
  );

export async function execute(thing) {
  const targetUser = thing.options.getUser('target');
  const messageContent = thing.options.getString('message');
  const repetitions = thing.options.getInteger('repetitions');

  if (repetitions > 20) {
    await thing.reply(`chill man, no more than 20`);
    return;
  }

  await thing.reply(`Hey ${targetUser}, ${messageContent}!`);

  await Promise.all(
    Array(repetitions - 1)
      .fill()
      .map(
        (_, index) =>
          new Promise((resolve) =>
            setTimeout(() => {
              thing.followUp(`Hey ${targetUser}, ${messageContent}!`);
              resolve();
            }, 500)
          )
      )
  );
}
