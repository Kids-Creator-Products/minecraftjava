export const myCustomPlugin = (bot: any) => {
  // Listen for chat messages
  bot.on('chat', (username: string, message: string) => {
    if (username === bot.username) return;
    if (message === 'ping') {
      bot.chat('pong!');
    }
  });

  // Add a custom function to the bot
  bot.myAction = () => {
    bot.chat("I am performing a custom action!");
  };
};
