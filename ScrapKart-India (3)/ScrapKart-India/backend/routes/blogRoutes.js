import { Router } from "express";
import { getBlogs, getBlogBySlug } from "../controllers/blogController.js";

const router = Router();

router.get("/", getBlogs);
router.get("/:slug", getBlogBySlug);

export default router;
