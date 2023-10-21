import express from "express";
import { validateCreatePlace, validatePlace } from "../middlewares/placeMiddleware.js";
import { createPlaceController } from "../controllers/placeController.js";

// router object
const router = express.Router();

// routing

// create place || method post
router.post("/", validateCreatePlace, validatePlace, createPlaceController);

export default router;
