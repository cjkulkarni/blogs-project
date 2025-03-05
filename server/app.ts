import express, { Request, Response, NextFunction } from "express";
import router from "./config/router";
import path from "path";
import createHttpError from "http-errors";
import globalErrorMiddleware from"./middleware/middleware"

const app = express();
app.use(express.json());

/* eg for the eunning the middleware */
app.get("/protected", (req: Request, res: Response, next: NextFunction) => {
    // Simulating an unauthorized access
    return next(createHttpError(401, "You are not authorized to access this page"));
});
app.use("/api", router);
/* passing the route to the main router */
    app.use(express.static(path.join(__dirname, "/../client/build")));
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "/../client/build", "index.html"));
    });

/* using middleware for global */
app.use(globalErrorMiddleware);

export default app; 