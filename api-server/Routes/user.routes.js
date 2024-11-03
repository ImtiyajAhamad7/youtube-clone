import { register, login, getUser } from "../Controller/user.controller.js";
import { verifyToken } from "../Middleware/varify.js";

export async function userRouter(app) {
  app.post("/api/user", register);
  app.post("/api/login", login);
  app.get("/api/getUser", verifyToken, getUser);
}
