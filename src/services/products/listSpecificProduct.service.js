import database from "../../database"
import { productReturnSerializer } from "../../serializers/products.serializers"
import AppError from "../../errors/appError"
import { validate } from "uuid"

const listSpecificProductService = async (id) => {
    
    if (!validate(id)) {
        throw new AppError("Product doesn't exists", 404)
    }
    
    const queryResponse = await database.query(`
        SELECT
            *
        FROM
            products
        WHERE
            id = $1;
    `,
    [id]
    )
    
    if(queryResponse.rows[0] === 0) {
        throw new AppError("product doesn't exists", 404)
    }

    const returnedProduct = await productReturnSerializer.validate(queryResponse.rows[0])
    return returnedProduct
}

export default listSpecificProductService