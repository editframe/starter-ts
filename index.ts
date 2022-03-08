import { Editframe, CommonResolutions } from "@editframe/editframe-js";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const editframe = new Editframe({
    clientId: process.env.EDITFRAME_CLIENT_ID,
    token: process.env.EDITFRAME_API_TOKEN,
  });

  const composition = await editframe.videos.new({
    dimensions: CommonResolutions._1080pVertical,
    duration: 10,
  });

  // make your video here

  await composition.encode();
};

main();
