import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

import { User } from "../entities/User";



interface IUsersRepository {

    create(data: ICreateUserDTO): Promise<void>;
    findByemail(email: string): Promise<User>;
    findById(id: string): Promise<User>;

}



export { IUsersRepository };

