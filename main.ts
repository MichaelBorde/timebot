import { Bot, CommandContext, Context, InlineKeyboard } from "grammy";

const botToken = process.env.BOT_TOKEN || "";

main().catch(console.error);

async function main() {
  const bot = new Bot(botToken, {
    client: {
      environment: "test",
    },
  });
  bot.command("start", start);
  return bot.start();

  async function start(ctx: CommandContext<Context>) {
    console.log(
      `Start command received from ${JSON.stringify(
        ctx.from
      )} in ${JSON.stringify(ctx.chat)}`
    );
    const keyboard = new InlineKeyboard().url(
      "Open Time App",
      "https://t.me/MikeTimeBot/app?startapp=debug"
    );
    return ctx.reply("Press button to open the app.", {
      reply_markup: keyboard,
    });
  }
}
