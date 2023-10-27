import dotenv from "dotenv";
import createApp from "./config/createApp";
import createCommands from "./commands";
import createMessages from "./messages";

dotenv.config();

const app = createApp();

createCommands(app);
createMessages(app);

const server = async () => {
  const port = process.env.PORT || 5001;
  await app.start(port);
  console.log(`⚡️Rotation Bot app is running on port ${port}`);
};

server();
