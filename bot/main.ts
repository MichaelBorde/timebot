import { Bot, CommandContext, Context, Keyboard } from "grammy";

main().catch(console.error);

async function main() {
  const bot = new Bot(process.env.BOT_TOKEN || "", {
    client: {
      environment: "test",
    },
  });
  bot.command("start", start);
  return bot.start();

  async function start(ctx: CommandContext<Context>) {
    const keyboard = new Keyboard().webApp(
      "Open Time App",
      "https://michaelborde.github.io/timebot"
    );

    await ctx.reply("Press to open the app", { reply_markup: keyboard });
  }
}
