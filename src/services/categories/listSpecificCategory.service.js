import database from "../../database"
import AppError from "../../errors/appError"
import { categoryReturnSerializer } from "../../serializers/categories.serializers"

const listSpecificCategoryService = async (id) => {
    
    if(isNaN(id)) {
        throw new AppError("Category doesnt exists", 404)
    }

    const queryResponse = await database.query(`
        SELECT
            *
        FROM
            categories
        WHERE
            id = $1;
    `,
    [id]
    )

    if(queryResponse.rowCount === 0) {
        throw new AppError("Category doesnt exists", 404)
    }

    const returnedCategory = await categoryReturnSerializer.validate(queryResponse.rows[0])
    return returnedCategory
}

export default listSpecificCategoryService