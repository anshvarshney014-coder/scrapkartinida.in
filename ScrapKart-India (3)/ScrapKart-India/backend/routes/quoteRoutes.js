import { Router } from "express";
import { createQuote, getQuotes } from "../controllers/quoteController.js";

const router = Router();

router.post("/", createQuote);
router.get("/", getQuotes);

export default router;
