import express, { Request, Response, NextFunction } from "express";
import router from "./config/router";
import path from "path";
import createHttpError from "http-errors";
import globalErrorMiddleware from"./middleware/middleware"

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, "/../client/build")));

app.use("/api", router);

app.get("/protected", (req: Request, res: Response, next: NextFunction) => {
    return next(createHttpError(401, "You are not authorized to access this page"));
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/../client/build", "index.html"));
});

app.use(globalErrorMiddleware);

export default app; 