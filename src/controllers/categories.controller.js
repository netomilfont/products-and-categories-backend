import createCategoryService from "../services/categories/createCategory.service"
import listAllCategoryService from "../services/categories/listAllCategories.service"
import listSpecificCategoryService from "../services/categories/listSpecificCategory.service"
import deleteCategoryService from "../services/categories/deleteCategory.service"
import updateCategoryService from "../services/categories/updateCategory.service"

const createCategoryController = async (req, res) => {
    const data = await createCategoryService(req.body)
    return res.status(201).json(data)
}

const listAllCategoriesController = async (req, res) => {
    const data = await listAllCategoryService()
    return res.status(200).json(data)
}

const listSpecificCategoryController = async (req, res) => {
    const category_id = req.params.id
    const data = await listSpecificCategoryService(category_id)
    return res.status(200).json(data)
}

const updateCategoryController = async (req, res) => {
    const category_id = req.params.id
    const data = await updateCategoryService(req.body, category_id)
    return res.status(200).json(data)
}

const deleteCategoryController = async (req, res) => {
    const category_id = req.params.id
    const data = await deleteCategoryService(category_id)
    return res.status(204).json(data)
}

export {createCategoryController, 
        listAllCategoriesController, 
        listSpecificCategoryController, 
        updateCategoryController, 
        deleteCategoryController}