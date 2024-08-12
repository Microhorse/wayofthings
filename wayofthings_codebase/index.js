/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// ここに実際の関数を実装してください
const functions = require("firebase-functions");
const {Client, GatewayIntentBits} = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once("ready", () => {
  console.log("Bot is ready!");
});

client.on("messageCreate", (message) => {
  if (message.content === "!hello") {
    message.reply("Hello! I am your bot.");
  }
});

exports.startBot = functions.https.onRequest(async (request, response) => {
  try {
    // CORSの設定（必要に応じて）
    response.set('Access-Control-Allow-Origin', '*');
    
    await client.login(functions.config().discord.token);
    console.log('Bot has started successfully');
    response.status(200).send("Bot started!");
  } catch (error) {
    console.error('Failed to start bot:', error);
    response.status(500).send("Failed to start bot: " + error.message);
  }
});

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
