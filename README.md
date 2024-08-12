#FROM SHINOZAKI
これはshinozakiのアカウントのBOTを使っています。

ソースコードはgithubに置きます。
firebaseはstripeやdiscordでやり取りしたデータを保存しておきます。


#hostingURL deployしたら得ました
https://wayofthings202408.web.app/
#firebase console
https://console.firebase.google.com/project/wayofthings202408/overview

git@github.com:Microhorse/wayofthings.git

これでサーバーに招待できます
https://discord.com/api/oauth2/authorize?client_id=1268259641226301522&permissions=8&scope=bot%20applications.commands



///////////////////////////////////////////////////////////
#1.firebaseデータベースへデータを読み込む
https://www.cloudskillsboost.google/focuses/8392?locale=ja&parent=catalog
cloudコンソール内のfirestoreデータベースを作成しそこにソースをアップロードします。

##1-1.gitにローカルフォルダをリンクする 
その前にgit情報を設定する↓　sshキー設定とかもある。AIに聞いてみて
https://genesis-tech.jp/blog/check-register-username-mail/
push方法など。
https://zenn.dev/toshihide2000/articles/d0c99f96e2706a


#2.firebaseにを使用してサーバーレスウェブアプリ
https://www.cloudskillsboost.google/focuses/8391?locale=ja&parent=catalog






■Firestoreとstripeの連携 - StripeUser モデルの作成
```
export const StripeUserCN = 'StripeUser'
export type StripeUser = {
  id?: string
  customerId: string | null
  username: string
  email: string
  isActivated: boolean
  expirationDate: Timestamp | FieldValue | null
  createdAt?: Timestamp | FieldValue
  updatedAt?: Timestamp | FieldValue
```ts

■サブスク購入時に webhookを受信して、StripeUser を作成する
createdAt:
customerId:
email:
expirationDate:
isActivated:
updatedAt:
username:
をフィールドに

■ボタンアクションからprivateチャンネルを作成し、支払いリンクを投稿
URLパラメータにclient_reference_idを追加してDiscordとstripeの情報を照合







# Getting Started app for Discord

This project contains a basic rock-paper-scissors-style Discord app written in JavaScript, built for the [getting started guide](https://discord.com/developers/docs/getting-started).

![Demo of app](https://github.com/discord/discord-example-app/raw/main/assets/getting-started-demo.gif?raw=true)

## Project structure
Below is a basic overview of the project structure:

```
├── examples    -> short, feature-specific sample apps
│   ├── app.js  -> finished app.js code
│   ├── button.js
│   ├── command.js
│   ├── modal.js
│   ├── selectMenu.js
├── .env.sample -> sample .env file
├── app.js      -> main entrypoint for app
├── commands.js -> slash command payloads + helpers
├── game.js     -> logic specific to RPS
├── utils.js    -> utility functions and enums
├── package.json
├── README.md
└── .gitignore
```

## Running app locally

Before you start, you'll need to install [NodeJS](https://nodejs.org/en/download/) and [create a Discord app](https://discord.com/developers/applications) with the proper permissions:
- `applications.commands`
- `bot` (with Send Messages enabled)


Configuring the app is covered in detail in the [getting started guide](https://discord.com/developers/docs/getting-started).

### Setup project

First clone the project:
```
git clone https://github.com/discord/discord-example-app.git
```

Then navigate to its directory and install dependencies:
```
cd discord-example-app
npm install
```
### Get app credentials

Fetch the credentials from your app's settings and add them to a `.env` file (see `.env.sample` for an example). You'll need your app ID (`APP_ID`), bot token (`DISCORD_TOKEN`), and public key (`PUBLIC_KEY`).

Fetching credentials is covered in detail in the [getting started guide](https://discord.com/developers/docs/getting-started).

> 🔑 Environment variables can be added to the `.env` file in Glitch or when developing locally, and in the Secrets tab in Replit (the lock icon on the left).

### Install slash commands

The commands for the example app are set up in `commands.js`. All of the commands in the `ALL_COMMANDS` array at the bottom of `commands.js` will be installed when you run the `register` command configured in `package.json`:

```
npm run register
```

### Run the app

After your credentials are added, go ahead and run the app:

```
node app.js
```

> ⚙️ A package [like `nodemon`](https://github.com/remy/nodemon), which watches for local changes and restarts your app, may be helpful while locally developing.

If you aren't following the [getting started guide](https://discord.com/developers/docs/getting-started), you can move the contents of `examples/app.js` (the finished `app.js` file) to the top-level `app.js`.

### Set up interactivity

The project needs a public endpoint where Discord can send requests. To develop and test locally, you can use something like [`ngrok`](https://ngrok.com/) to tunnel HTTP traffic.

Install ngrok if you haven't already, then start listening on port `3000`:

```
ngrok http 3000
```

You should see your connection open:

```
Tunnel Status                 online
Version                       2.0/2.0
Web Interface                 http://127.0.0.1:4040
Forwarding                    https://1234-someurl.ngrok.io -> localhost:3000

Connections                  ttl     opn     rt1     rt5     p50     p90
                              0       0       0.00    0.00    0.00    0.00
```

Copy the forwarding address that starts with `https`, in this case `https://1234-someurl.ngrok.io`, then go to your [app's settings](https://discord.com/developers/applications).

On the **General Information** tab, there will be an **Interactions Endpoint URL**. Paste your ngrok address there, and append `/interactions` to it (`https://1234-someurl.ngrok.io/interactions` in the example).

Click **Save Changes**, and your app should be ready to run 🚀

## Other resources
- Read **[the documentation](https://discord.com/developers/docs/intro)** for in-depth information about API features.
- Browse the `examples/` folder in this project for smaller, feature-specific code examples
- Join the **[Discord Developers server](https://discord.gg/discord-developers)** to ask questions about the API, attend events hosted by the Discord API team, and interact with other devs.
- Check out **[community resources](https://discord.com/developers/docs/topics/community-resources#community-resources)** for language-specific tools maintained by community members.
