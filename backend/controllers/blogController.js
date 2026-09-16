import Blog from "../models/Blog.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";

// @route   GET /api/blogs
// @desc    List published blog posts
export const getBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find({ published: true })
    .sort({ createdAt: -1 })
    .select("-content");

  res.status(200).json({ success: true, count: blogs.length, data: blogs });
});

// @route   GET /api/blogs/:slug
// @desc    Get a single blog post by slug
export const getBlogBySlug = asyncHandler(async (req, res) => {
  const blog = await Blog.findOne({ slug: req.params.slug, published: true });

  if (!blog) {
    throw new ApiError(404, "Blog post not found");
  }

  res.status(200).json({ success: true, data: blog });
});
