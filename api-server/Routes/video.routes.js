import { getAllVideos, getVideoById } from "../Controller/video.controller.js";

export async function videoRouter(app) {
  app.get("/api/videos", getAllVideos);
  app.get("/api/videos/:id", getVideoById);
}
