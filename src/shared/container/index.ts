import { container } from "tsyringe";

import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository"
import { ISpecificationsRepository } from "../../modules/cars/repositories/ISpecificationsRepository";

import { CategoriesRepository } from "../../modules/cars/repositories/implementations/CategoriesRepository"
import { SpecificationsRepository } from "../../modules/cars/repositories/implementations/SpecificationsRepository"

import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepositories";
import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository";

container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
    );

container.registerSingleton<ISpecificationsRepository>(
    "SpecificationsRepository",
    SpecificationsRepository
    );

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
)