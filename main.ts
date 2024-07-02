import { Bot } from "grammy";

main().catch(console.error);

async function main() {
  const bot = new Bot(process.env.BOT_TOKEN || "", {
    client: {
      environment: "test",
    },
  });
  bot.command("start", (ctx) => ctx.reply("<°))))><"));
  bot.command("slap", (ctx) => ctx.reply(`${ctx.match} has been trouted.`));
  return bot.start();
}
