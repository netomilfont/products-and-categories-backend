import database from "../../database"
import { listAllProductsSerializer } from "../../serializers/products.serializers"

const listAllProductsService = async () => {
    const products = await database.query(`
        SELECT 
	       *
        FROM 
            products;
    `)

    const validatedProducts = await listAllProductsSerializer.validate(products.rows)

    return validatedProducts
}

export default listAllProductsService