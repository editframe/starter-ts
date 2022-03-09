import { Editframe } from "@editframe/editframe-js";
import dotenv from "dotenv";

dotenv.config();
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";

const main = async () => {
  const editframe = new Editframe({
    clientId: process.env.EDITFRAME_CLIENT_ID,
    host: "https://api.editframe.test",
    token: process.env.EDITFRAME_API_TOKEN,
  });

  const composition = await editframe.videos.new({
    dimensions: {
      height: 1080,
      width: 1920,
    },
    duration: 10,
  });

  // make your video here

  await composition.encode();
};

main();
