import express from "express";
import user from "../controllers/userController";
import blog from "../controllers/blogController";

const router = express.Router();

router.use("/api/users", user);
router.use("/api/blogs", blog);
export default router;