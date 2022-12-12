import * as yup from "yup";

const createCategorySerializer = yup.object().shape({
    name: yup.string().required()
})

const categoryReturnSerializer = yup.object().shape({
    id: yup.number(),
    name: yup.string(),
})

const listAllCategoriesSerializer = yup.array(categoryReturnSerializer)


export { createCategorySerializer, categoryReturnSerializer, listAllCategoriesSerializer}