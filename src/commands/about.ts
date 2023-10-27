import { AllMiddlewareArgs, SlackCommandMiddlewareArgs } from "@slack/bolt";
import { StringIndexed } from "@slack/bolt/dist/types/helpers";

async function about({
  ack,
  say,
  logger,
}: SlackCommandMiddlewareArgs & AllMiddlewareArgs<StringIndexed>) {
  try {
    await ack();
    say(
      "App to manage team rotations. Use '/rotation-app help' to list key commands"
    );
  } catch (error) {
    logger.error(`Error: ${error}`);
  }
}

export default about;
