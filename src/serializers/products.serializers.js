import * as yup from "yup";

const createProductSerializer = yup.object().shape({
    name: yup.string().required(),
    price: yup.number().required(),
    category_id: yup.number().required()
})

const productReturnSerializer = yup.object().shape({
    id: yup.string(),
    name: yup.string(),
    price: yup.number(),
    category_id: yup.number()
})

const listAllProductsSerializer = yup.array(productReturnSerializer)

const listProductByCategoryIdSerializer = yup.object().shape({
    name: yup.string(),
    price: yup.number(),
    category: yup.string()
})

const listAllProductsByCategoryIdSerializer = yup.array(listProductByCategoryIdSerializer)

export { createProductSerializer, productReturnSerializer, listAllProductsSerializer, listAllProductsByCategoryIdSerializer}