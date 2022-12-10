import createCategoryService from "../services/categories/createCategory.service"

const createCategoryController = async (req, res) => {
    const data = await createCategoryService(req.body)
    return res.status(201).json(data)
}

export default createCategoryController