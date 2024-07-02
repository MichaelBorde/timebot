import { Bot } from "grammy";

main().catch(console.error);

async function main() {
  const bot = new Bot(process.env.BOT_TOKEN || "", {
    client: {
      environment: "test",
    },
  });
  return bot.start();
}
