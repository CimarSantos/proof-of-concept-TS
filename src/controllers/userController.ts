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
            return res.status(422).send(error.message);
        }
        return res.status(400).send("Este email já está cadastrado. Tente outro.");
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

async function updateEmailById(req: Request, res: Response) {
    const id = req.params.id;
    const { email } = req.body;

    try {
        await userServices.updateEmailById(Number(id), email);

        return res.status(200).send("Email atualizado com sucesso!");
    } catch (error: unknown) {
        if (error instanceof Error) {
            return res.status(404).send(error.message);
        }
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


export default { signUp, showUsers, updateEmailById, deleteUserById };