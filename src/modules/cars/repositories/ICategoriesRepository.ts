import { Category } from "../entities/Category";

// eslint-disable-next-line @typescript-eslint/naming-convention
interface iCreateCategoryDTO {
    name: string;
    description: string;
}


interface ICategoriesRepository {
    findByName(name: string): Promise<Category>;
    list(): Promise<Category[]>;
    create({ name, description }: iCreateCategoryDTO): Promise<void>;
}

export { ICategoriesRepository, iCreateCategoryDTO };
