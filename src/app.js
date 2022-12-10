import "express-async-errors"
import express from "express"
import handleAppError from "./middlewares/handleAppError.middlewares"
import categoriesRoutes from "./routes/categories.route"

const app = express()

app.use(express.json())

app.use("/categories", categoriesRoutes)
app.use(handleAppError)

export default app
