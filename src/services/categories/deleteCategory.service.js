import database from "../../database"
import AppError from "../../errors/appError"

const deleteCategoryService  = async (id) => {
    
    if(isNaN(id)) {
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
        [id]
    )

    if(findCategory.rowCount === 0) {
        throw new AppError("Category doesn't exists", 404)
    }

    const queryResponse = await database.query(`
        DELETE FROM
            categories cat
        WHERE
            cat.id = $1
    `,
    [id]
    )

    return queryResponse.rows[0]
}

export default deleteCategoryService