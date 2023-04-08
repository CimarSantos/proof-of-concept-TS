import { Router } from "express";
import userController from "../controllers/userController.ts";
import { validateSchema } from "middlewares/schemaValidator.ts";
import { userSchema } from "schemas/userSchema.ts";

const userRouter = Router();

userRouter.post("/signup", validateSchema(userSchema), userController.signUp);
userRouter.get("/get", userController.showUsers);
userRouter.patch("/update/:id", userController.updateEmailById);
userRouter.delete("/delete/:id", userController.deleteUserById);

export default userRouter;