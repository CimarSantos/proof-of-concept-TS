import bcrypt from "bcrypt";
import * as userRepositories from "../repositories/userRepository.ts";
import errors from "../errors/index.js";

interface User {
    name: string;
    email: string;
    password: string;
}

async function insetUserIntoUsers(user: User):
    Promise<void> {
    const { rowCount } = await userRepositories.findUserByEmail(user.email);
    if (rowCount) throw errors.duplicatedEmailError(user.email);

    const hashPassword = await bcrypt.hash(user.password, 10);
    await userRepositories.insetUserIntoUsers({ name: user.name, email: user.email, password: hashPassword });
}



export default {
    insetUserIntoUsers
};