import database from "../../database"
import { listAllProductsByCategoryIdSerializer } from "../../serializers/products.serializers"
import AppError from "../../errors/appError"

const listProductByCategoryIdService = async (categoryId) => {
    const queryResponse = await database.query(`
    SELECT
        prod."name",
        prod.price,
        cat."name" category
    FROM
        products prod
    JOIN
        categories cat ON prod.category_id  = cat.id
    WHERE
        cat.id = $1;
    `,
    [categoryId]
    )
    
    if(queryResponse.rowCount <= 0) {
        throw new AppError("Category doesnt have products", 404)
    }

    const returnedProduct = await listAllProductsByCategoryIdSerializer.validate(queryResponse.rows)
    return returnedProduct
}

export default listProductByCategoryIdService