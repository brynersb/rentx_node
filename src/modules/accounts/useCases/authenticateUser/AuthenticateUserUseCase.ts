import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepositories";
import { compare } from "bcrypt"
import { sign } from "jsonwebtoken"
import { AppError } from "../../../../errors/AppError";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string,
        email: string
    },
    token: string
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private userRepository: IUsersRepository

    ) { }


    async execute({ email, password }: IRequest): Promise<IResponse> {
        const user = await this.userRepository.findByemail(email);

        if (!user) {
            throw new AppError("Email or password incorrect!");
        };

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new AppError("Email or password Incorrect!");
        };

        const token = sign({}, "4b0cefcfc4a50d445f98e282e42548b9", {
            subject: user.id,
            expiresIn: "1d"
        });

        const tokenReturn: IResponse = {
            token,
            user: {
                name: user.name,
                email: user.email,
            },
        };

        return tokenReturn;

    };
}

export { AuthenticateUserUseCase };