import database from "../../database"
import { categoryReturnSerializer } from "../../serializers/categories.serializers"
import AppError from "../../errors/appError"

const updateCategoryService = async (data, categoryId) => {

    if(isNaN(categoryId)) {
        throw new AppError("Category doesnt exists", 404)
    }

    const findCategory = await database.query(
        `SELECT 
            * 
        FROM 
            categories
        WHERE
            id = $1;
        `,
        [categoryId]
    )
    
    if(findCategory.rowCount === 0) {
        throw new AppError("Category doesn't exists", 404)
    }

    let query = 'UPDATE categories set '
    const keys = Object.keys(data)
    const values = Object.values(data)

    keys.forEach((key, index) => {
        query += `${key} = \$${index+=1}, `
    }) 

    query = query.slice(0, -2)

    query += `WHERE id = \$${keys.length+=1} RETURNING * ;`

    const queryResponse = await database.query(
        query,
        [...values, categoryId]
    )

    const returnedCategory =  await categoryReturnSerializer.validate(queryResponse.rows[0])
    return returnedCategory
} 

export default updateCategoryService