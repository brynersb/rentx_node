import { Request, Response } from "express";
import { ListCategoriesUsecase } from "./ListCategoriesUseCase"
import { container } from "tsyringe"

class ListCategoriesController {



    async handle(request: Request, response: Response): Promise<Response> {
        
        const listCategoriesUsecase = container.resolve(ListCategoriesUsecase)

        const all = await listCategoriesUsecase.execute();

        return response.json(all);
    }
}

export { ListCategoriesController }