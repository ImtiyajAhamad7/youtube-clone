import {
  getAllVideos,
  getVideoById,
  getComment,
  postComment,
} from "../Controller/video.controller.js";

import {
  createChannel,
  getChannelById,
} from "../Controller/channel.controller.js";

export async function videoRouter(app) {
  app.get("/api/videos", getAllVideos);
  app.get("/api/videos/:id", getVideoById);
  app.post("/api/channels", createChannel);
  app.get("/api/channels/:id", getChannelById);
  app.get("/api/getComments/:id", getComment);
  app.post("/api/postComment/:id", postComment);
}
