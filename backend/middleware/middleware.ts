import { Request, Response, NextFunction } from "express";
import { HttpError } from "http-errors";


const globalErrorMiddleware = (err: HttpError, req: Request, res: Response, next: NextFunction) => {
    res.status(err.status || 500).json({
        error: {
            message: err.message || "Internal Server Error",
            status: err.status || 500
        }
    });
    next();
}

export default globalErrorMiddleware;