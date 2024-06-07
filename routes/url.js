import express from "express";
import { getAnalytics, getData, urlShortener } from "../controller/url.js";

const router = express.Router();
router.post("/url",urlShortener)
router.get("/:ShortId",getData);
router.get("/analytics/:ShortId",getAnalytics);
export default router ;
