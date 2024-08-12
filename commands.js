import 'dotenv/config';
import { getRPSChoices } from './game.js';
import { capitalize, InstallGlobalCommands } from './utils.js';

//firestoreを使用するためのインポート
const { Firestore } = require("@google-cloud/firestore");


// Get the game choices from game.js
function createCommandChoices() {
  const choices = getRPSChoices();
  const commandChoices = [];

  for (let choice of choices) {
    commandChoices.push({
      name: capitalize(choice),
      value: choice.toLowerCase(),
    });
  }

  return commandChoices;
}


// Simple test command
const TEST_COMMAND = {
  name: 'test',
  description: 'Basic command',
  type: 1,
  integration_types: [0, 1],
  contexts: [0, 1, 2],
};

const SUBSCRIBE_COMMAND = {
  name: "subscribe",
  description: "決済・外部サービス連携",
  type: 1,
  options: [
    {
      name: "service",
      type: 3,
      required: true,
      description: "決済・連携サービスを選択してください",
      choices: [
        { name: "stripe", value: "stripe" },
        { name: "wix", value: "wix" },
        { name: "shopify", value: "shopify" },
      ],
    },
  ],
};

// Command containing options
const CHALLENGE_COMMAND = {
  name: 'challenge',
  description: 'Challenge to a match of rock paper scissors',
  options: [
    {
      type: 3,
      name: 'object',
      description: 'Pick your object',
      required: true,
      choices: createCommandChoices(),
    },
  ],
  type: 1,
  integration_types: [0, 1],
  contexts: [0, 2],
};



const ALL_COMMANDS = [TEST_COMMAND, SUBSCRIBE_COMMAND, CHALLENGE_COMMAND];

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);
