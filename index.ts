import { Editframe } from "@editframe/editframe-js";
import dotenv from "dotenv";

dotenv.config();
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";

const main = async () => {
  const editframe = new Editframe({
    host: "https://api.editframe.test",
    token: process.env.EDITFRAME_API_TOKEN,
    develop: true, // set to develop mode
  });

  const composition = await editframe.videos.new({
    dimensions: {
      height: 1080,
      width: 1920,
    },
    duration: 10,
  });

  // make your video here

  await composition.encodeSync();
};

main();
