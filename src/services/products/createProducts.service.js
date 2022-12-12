import database from "../../database";
import { productReturnSerializer } from "../../serializers/products.serializers";

const createProductService = async (productData) => {

    const queryResponse = await database.query(
        `INSERT INTO 
            products(name, price, category_id)
        VALUES
            ($1, $2, $3)
        RETURNING *;
        `,
        [productData.name, productData.price, productData.category_id]
    )
    const  returnedProduct = await productReturnSerializer.validate(queryResponse.rows[0])
    return returnedProduct
}

export default createProductService