import { Category } from "../../entities/Category";
import { getRepository, Repository } from "typeorm"
import { ICategoriesRepository, iCreateCategoryDTO } from "../ICategoriesRepository";

// eslint-disable-next-line @typescript-eslint/naming-convention

class CategoriesRepository implements ICategoriesRepository {
    private repository: Repository<Category>

    constructor() {
        this.repository = getRepository(Category);
    }

    async create({ name, description }: iCreateCategoryDTO): Promise<void> {
        const category = this.repository.create({
            description,
            name
        });
        
        await this.repository.save(category);
    }

    async list(): Promise<Category[]> {
        const categories = await this.repository.find();
        console.log(categories)
        return categories;
    }
    
    async findByName(name: string): Promise<Category> {
        // Select * from categories where name = "name" limit 1
        const category = await this.repository.findOne({name});
    
        return category;
    }
}

export { CategoriesRepository };
