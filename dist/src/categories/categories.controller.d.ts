import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    create(createCategoryDto: CreateCategoryDto): Promise<import("./entities/categories.entity").Category>;
    findAll(): Promise<import("./entities/categories.entity").Category[]>;
    findOne(id: string): Promise<import("./entities/categories.entity").Category>;
    update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<import("./entities/categories.entity").Category>;
    remove(id: string): Promise<void>;
}
