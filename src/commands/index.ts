import { App } from "@slack/bolt";
import about from "./about";

function createCommands(app: App) {
  app.command("/rotation-app", async (slackCommand) => {
    about(slackCommand);
  });

  app.command("/rotation-app-create", async ({ ack, body, client, logger }) => {
    await ack();
    try {
      const result = await client.views.open({
        trigger_id: body.trigger_id,
        view: {
          type: "modal",
          callback_id: "view_1",
          title: {
            type: "plain_text",
            text: "Modal title",
          },
          blocks: [
            {
              type: "section",
              text: {
                type: "mrkdwn",
                text: "Welcome to a modal with _blocks_",
              },
              accessory: {
                type: "button",
                text: {
                  type: "plain_text",
                  text: "Click me!",
                },
                action_id: "button_abc",
              },
            },
            {
              type: "input",
              block_id: "input_c",
              label: {
                type: "plain_text",
                text: "What are your hopes and dreams?",
              },
              element: {
                type: "plain_text_input",
                action_id: "dreamy_input",
                multiline: true,
              },
            },
          ],
          submit: {
            type: "plain_text",
            text: "Submit",
          },
        },
      });
      logger.info(result);
    } catch (error) {
      console.error("Error:", error);
    }
  });
}

export default createCommands;
