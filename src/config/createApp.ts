import { App } from "@slack/bolt";

function createApp() {
  return new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    socketMode: process.env.SOCKET_MODE === "true",
    appToken: process.env.APP_TOKEN,
  });
}

export default createApp;
