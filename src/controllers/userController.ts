import { Request, Response } from "express";
import userServices from "services/userServices.ts";
import * as userRpositories from "../repositories/userRepository.ts"

async function signUp(req: Request, res: Response) {
    const { name, email, password } = req.body;

    try {
        await userServices.insetUserIntoUsers({ name, email, password });

        return res.sendStatus(201);
    } catch (error: unknown) {
        if (error instanceof Error) {
            return res.status(500).send(error.message);
        }
        return res.status(400).send("Ocorreu um erro, verifique os dados inseridos");
    }
}

async function showUsers(req: Request, res: Response) {
    try {
        const users = await userRpositories.getUsersFromUsers();

        return res.send(users.rows);
    } catch (error: unknown) {
        if (error instanceof Error) {
            return res.status(500).send(error.message);
        }
        return res.status(404).send("Dados de usuários não encontrados");
    }
}

async function deleteUserById(req: Request, res: Response) {
    const id = req.params.id;

    try {
        await userServices.deleteUserById(Number(id));
        return res.status(200).send("Usuário deletado do banco de dados");
    } catch (error: unknown) {
        if (error instanceof Error) {
            return res.status(404).send(error.message);
        }
    }
}


export default { signUp, showUsers, deleteUserById };