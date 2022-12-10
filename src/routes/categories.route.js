import { Router } from "express";
import createCategoryController from "../controllers/categories.controller";
import validateDataMiddleware from "../middlewares/validatedData.middlewares";
import { createCategorySerializer } from "../serializers/categories.serializers";

const categoriesRoutes = Router()

categoriesRoutes.post("", validateDataMiddleware(createCategorySerializer), createCategoryController)

export default categoriesRoutes