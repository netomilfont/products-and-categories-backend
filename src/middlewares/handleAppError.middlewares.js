import AppError from "../errors/appError";

const handleAppError = (error, req, res, next) => {
    if(error instanceof AppError) {
        return res.status(error.statusCode).json(error.message)
    }

    return res.status(500).json({
        message: "Internal server error!"
    })
}

export default handleAppError