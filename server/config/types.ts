import { Request } from "express";

export interface User {
    _id: string;
    name: string;
    email: string;
    password: string;
}
export interface Blog {
    _id: string;
    name: string;
    content: string;
    image: string;
}

export interface AuthRequest extends Request{
    userId: string;
}