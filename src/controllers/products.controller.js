import createProductService from "../services/products/createProducts.service";
import listAllProductsService from "../services/products/listAllProducts.service";
import listSpecificProductService from "../services/products/listSpecificProduct.service";
import listProductByCategoryIdService from "../services/products/listProductByCategoryId.service";
import updateProductService from "../services/products/updateProduct.service";
import deleteProductService from "../services/products/deleteProduct.service";

const createProductController = async (req, res) => {
    const data = await createProductService(req.body)
    return res.status(201).json(data)
}

const listAllProductsController = async (req, res) => {
    const data = await listAllProductsService()
    return res.status(200).json(data)
}

const listSpecificProductController = async (req, res) => {
    const product_id = req.params.id
    const data = await listSpecificProductService(product_id)
    return res.status(200).json(data)
}

const updateProductController = async (req, res) => {
    const product_id = req.params.id
    const data = await updateProductService(req.body, product_id)
    return res.status(200).json(data)
}

const deleteProductController = async (req, res) => {
    const product_id = req.params.id
    const data = await deleteProductService(product_id)
    return res.status(204).json(data)
}

const listProductByCategoryIdController = async (req, res) =>{
    const category_id = req.params.category_id
    const data = await listProductByCategoryIdService(category_id)
    return res.status(200).json(data)

}

export { createProductController, 
        listAllProductsController, 
        listSpecificProductController, 
        updateProductController, 
        deleteProductController, 
        listProductByCategoryIdController }