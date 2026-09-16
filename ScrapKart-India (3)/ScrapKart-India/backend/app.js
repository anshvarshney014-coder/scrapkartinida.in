import express from "express";
import cors from "cors";
import morgan from "morgan";
import "express-async-errors";

import quoteRoutes from "./routes/quoteRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import { notFound, errorHandler } from "./middleware/errorHandler.js";

const app = express();

const allowedOrigin = process.env.CLIENT_URL || "http://localhost:5173";

app.use(cors({ origin: allowedOrigin, credentials: true }));
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.get("/api/health", (req, res) => {
  res.status(200).json({ success: true, message: "ScrapKart India API is running" });
});

app.use("/api/quotes", quoteRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/blogs", blogRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
