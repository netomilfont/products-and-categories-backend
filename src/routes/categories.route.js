import { Router } from "express";
import {createCategoryController,  deleteCategoryController,  listAllCategoriesController, listSpecificCategoryController, updateCategoryController} from "../controllers/categories.controller";
import validateDataMiddleware from "../middlewares/validatedData.middlewares";
import { createCategorySerializer } from "../serializers/categories.serializers";

const categoriesRoutes = Router()

categoriesRoutes.post("", validateDataMiddleware(createCategorySerializer), createCategoryController)
categoriesRoutes.get("", listAllCategoriesController)
categoriesRoutes.get("/:id", listSpecificCategoryController)
categoriesRoutes.patch("/:id", updateCategoryController)
categoriesRoutes.delete("/:id", deleteCategoryController)

export default categoriesRoutes