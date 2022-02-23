import { Specification } from "../entities/Specification";

// eslint-disable-next-line @typescript-eslint/naming-convention
interface iCreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationsRepository {
    create({ name, description }: iCreateSpecificationDTO): Promise<void>;
    findByName(name: string): Promise<Specification>;
}

export { ISpecificationsRepository, iCreateSpecificationDTO };
