import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepositories";
import { hash } from "bcrypt";
import { AppError } from "../../../../errors/AppError";


@injectable()
class CreateUserUseCase {

    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {

    }

    async execute({ name, email, password, driver_license }: ICreateUserDTO): Promise<void> {

        const userAlreadyExists = await this.usersRepository.findByemail(email);

        if (userAlreadyExists) {
            throw new AppError("User already exists!!!");

        }

        const passwordHash = await hash(password, 8);

        await this.usersRepository.create({
            name,
            password: passwordHash,
            email,
            driver_license
        });
    }
}

export { CreateUserUseCase }