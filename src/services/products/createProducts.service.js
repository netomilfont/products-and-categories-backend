import database from "../../database";
import AppError from "../../errors/appError";
import { categoryReturnSerializer } from "../../serializers/categories.serializers";

const createCategoryService = async (userData) => {

    const findCategory = await database.query(
        `SELECT 
            * 
        FROM 
            categories
        WHERE
            name = $1;
        `,
        [userData.name]
    )

    if(findCategory.rowCount > 0) {
        throw new AppError("Category already exists", 400)
    }

    const queryResponse = await database.query(
        `INSERT INTO 
            categories(name)
        VALUES
            ($1)
        RETURNING *;
        `,
        [userData.name]
    )
    const  returnedCategory = await categoryReturnSerializer.validate(queryResponse.rows[0])
    return returnedCategory
}

export default createCategoryService