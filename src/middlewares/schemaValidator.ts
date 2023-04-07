import { Request, Response, NextFunction } from "express";
import Joi from "joi";

export const validateSchema = (schema: Joi.ObjectSchema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req.body);
        if (error) {
            return res.status(400).json({
                message: "Erro na validação",
                error: error.details.map((i) => i.message),
            });
        }
        return next();
    };
};