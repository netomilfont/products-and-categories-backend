import database from "../../database"
import AppError from "../../errors/appError"
import { productReturnSerializer } from "../../serializers/products.serializers"
import { validate } from "uuid"

const updateProductService = async (data, productId) => {
    
    if (!validate(productId)) {
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
        [productId]
    )
    
    if(findProduct.rowCount === 0) {
        throw new AppError("Product doesn't exists", 404)
    }

    let query = 'UPDATE products set '
    const keys = Object.keys(data)
    const values = Object.values(data)

    keys.forEach((key, index) => {
        query += `${key} = \$${index+=1}, `
    }) 

    query = query.slice(0, -2)

    query += `WHERE id = \$${keys.length+=1} RETURNING * ;`

    const queryResponse = await database.query(
        query,
        [...values, productId]
    )

    const returnedProduct =  await productReturnSerializer.validate(queryResponse.rows[0])
    return returnedProduct
} 

export default updateProductService