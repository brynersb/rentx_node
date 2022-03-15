import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/AppError";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";


interface IPayload {
    sub: string
}


export async function ensureAuthenticated(request: Request, respose: Response, next: NextFunction) {

    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError("Token missing", 401)
    }

    const [, token] = authHeader.split(" ")

    try {
        const { sub: user_id } = verify(token, "4b0cefcfc4a50d445f98e282e42548b9") as IPayload;
    

        const usersRepository = new UsersRepository();
        const user = await usersRepository.findById(user_id)

        if (!user) {
            throw new AppError("User does not existis!", 401)
        }
        next()
    } catch {
        throw new AppError("Invalid Token!", 401)

    }


} 