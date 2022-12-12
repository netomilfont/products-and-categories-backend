import database from "../../database"
import AppError from "../../errors/appError"
import { validate } from "uuid"

const deleteProductService  = async (id) => {

    if (!validate(id)) {
        throw new AppError("Product doesn't exists", 404)
    }

    const findProduct = await database.query(
        `SELECT 
            * 
        FROM 
            products
        WHERE
            id = $1;
        `,
        [id]
    )

    if(findProduct.rowCount <= 0) {
        throw new AppError("Product doesn't exists", 404)
    }

    const queryResponse = await database.query(`
        DELETE FROM
            products prod
        WHERE
            prod.id = $1
    `,
    [id]
    )

    return queryResponse.rows[0]
}

export default deleteProductService