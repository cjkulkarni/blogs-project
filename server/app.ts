import express, { Request, Response, NextFunction } from "express";
import router from "./config/router";
import createHttpError from "http-errors";
import globalErrorMiddleware from"./middleware/middleware"

const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.json({ message: "welcome to site" } );
});
/* eg for the eunning the middleware */
app.get("/protected", (req: Request, res: Response, next: NextFunction) => {
    // Simulating an unauthorized access
    return next(createHttpError(401, "You are not authorized to access this page"));
});
/* passing the route to the main router */
app.use("/", router);

/* using middleware for global */
app.use(globalErrorMiddleware);

export default app; 