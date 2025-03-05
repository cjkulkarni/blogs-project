import mongoose from "mongoose";
import { Blog } from "../config/types";

const blogSchema = new mongoose.Schema<Blog>({
    name: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    }
},
    { timestamps: true }
);

export default mongoose.model<Blog>('Blog', blogSchema);

