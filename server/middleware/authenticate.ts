import { verify } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import createHttpError from "http-errors";
import { config } from "../config/config";
import { AuthRequest } from "../config/types";


const userAuthenticate = (req: Request, res: Response, next: NextFunction) => { 
    
    const token = req.header("Authorization");
    if (!token) {
        const err = createHttpError(401, "Authorization token is required ");
        return next(err);
    }

    const parsedToken = token.split(" ")[1];
    if (!parsedToken) {
        const err = createHttpError(401, "Authorization token is required ");
        return next(err);
    }

    const tokenDecode = verify(parsedToken, config.jwrSecret as string);
    if (!tokenDecode.sub) {
        const err = createHttpError(401, "Invalid Authorization token ");
        return next(err);
    }

    const _req = req as AuthRequest;
    _req.userId = tokenDecode.sub as string;
    next();
};

export default userAuthenticate;