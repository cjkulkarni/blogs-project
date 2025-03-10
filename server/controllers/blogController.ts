import express, { Request, Response, NextFunction } from "express";
import createHttpError from "http-errors";
import blogModel from "../model/blogModel";

const blog = express.Router(); 

blog.get("/", async(req: Request, res: Response, next: NextFunction) => {
    try {
        const bloglist = await blogModel.find({});
        if (bloglist == null) {
            const err = createHttpError(200, "no blogs available");
            return next(err);
        }
        res.json({ message: "all blogs", totalBlogs: bloglist.length,blogs: bloglist });  
    } catch (error) {
          return next(createHttpError(500, "Error while fetching blogs "+error));
    }
});

blog.post("/add", async(req: Request, res: Response, next: NextFunction) => {

      const { name, content, image } = req.body;
         /* blog info check ( validations ) */
         if (!name || !content || !image) {
              const err = createHttpError(400, " Need all fields");
              return next(err);
         }
         
         /** creating blog in the db */
         try {
    
            const newBlog = await blogModel.create({
                   name,
                   content,
                   image,
              });
             
             res.status(201).json({ message: "new blog created", newblog: newBlog });
             

         }catch(error){
              return next(createHttpError(500, "Error while creating blog "+error));
         }
    
});

blog.post("/update", async(req: Request, res: Response, next: NextFunction) => {

      const { id, name, content, image } = req.body;
         /* blog info check ( validations ) */
         if (!id || !name || !content || !image) {
              const err = createHttpError(400, " Need all fields");
              return next(err);
         }
         
         /** creating blog in the db */
    try {
    
        const newBlog = await blogModel.updateOne({ _id: id }, {
            $set: {
                name,
                content,
                image,
            }
        });

        if (newBlog.modifiedCount == 0) {
             const err = createHttpError(400, " invalid id blog not found");
              return next(err);
        }
             
             res.status(200).json({ message: "blog updated sucessfully" });
             

         }catch(error){
              return next(createHttpError(500, "Error while updating the blog "+error));
         }
    
});

export default blog;