import database from "../../database"
import { listAllCategoriesSerializer } from "../../serializers/categories.serializers"


const listAllCategoryService = async () => {
    const categories = await database.query(`
        SELECT 
	       *
        FROM 
            categories;
    `)

    const validatedCategories = await listAllCategoriesSerializer.validate(categories.rows)

    return validatedCategories
}

export default listAllCategoryService