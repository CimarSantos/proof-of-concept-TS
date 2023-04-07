import { Router } from "express";
import userRouter from "./userRouter.ts"

const routes = Router();

routes.use("/users", userRouter);
/* routes.use("/posts"); */

export default routes;