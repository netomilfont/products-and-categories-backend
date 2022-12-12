import { Router } from "express";
import { createProductController, deleteProductController, listAllProductsController, listProductByCategoryIdController, listSpecificProductController, updateProductController } from "../controllers/products.controller";
import validateDataMiddleware from "../middlewares/validatedData.middlewares";
import { createProductSerializer } from "../serializers/products.serializers";

const productsRoutes = Router()

productsRoutes.post("", validateDataMiddleware(createProductSerializer), createProductController)
productsRoutes.get("", listAllProductsController)
productsRoutes.get("/:id", listSpecificProductController)
productsRoutes.get("/category/:category_id", listProductByCategoryIdController)
productsRoutes.patch("/:id", updateProductController)
productsRoutes.delete("/:id", deleteProductController)

export default productsRoutes