import { Router } from "express";
import userController from "../controllers/userController.ts";
import { validateSchema } from "middlewares/schemaValidator.ts";
import { userSchema } from "schemas/userSchema.ts";

const userRouter = Router();

userRouter.use("/signup", validateSchema(userSchema), userController.signUp);
userRouter.use("/get", userController.showUsers);

export default userRouter;