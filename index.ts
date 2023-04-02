import { Editframe } from "@editframe/editframe-js";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const editframe = new Editframe({
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

  // add your video layers, here

  await composition.encodeSync();
};

main();
