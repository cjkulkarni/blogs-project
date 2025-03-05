import express from "express";
import user from "../controllers/userController";
import blog from "../controllers/blogController";


const router = express.Router();

router.use("/users", user);
router.use("/blogs", blog);

export default router;