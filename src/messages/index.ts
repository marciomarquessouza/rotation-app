import { App } from "@slack/bolt";

function createMessages(app: App) {
  app.message("rotation list", async ({ message, say }) => {
    say("Rotation List");
  });

  app.message(/^(create-rotation).*/, async ({ context, say }) => {
    const command = context.matches[0] as string;
    if (!command) {
      say("Invalid rotation name. Use create-rotation <rotation-name>");
      return;
    }
    const commandList = command.split(" ");
    if (commandList.length < 2) {
      say("Missing rotation name. Use create-rotation <rotation-name>");
      return;
    }
    commandList.shift();
    const rotationName = commandList.join(" ");

    await say(`Rotation ${rotationName} create with success`);
  });
}

export default createMessages;
