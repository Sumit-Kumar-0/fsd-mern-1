import express from "express";
import { validateCreatePlace, validateUpdatePlace } from "../middlewares/placeMiddleware.js";
import { createPlaceController, getAllPlace, getPlaceByPlaceId, getPlaceByUserId, updatePlaceController } from '../controllers/placeController.js';

// router object
const router = express.Router();

// routing

// get all place
router.get("/", getAllPlace)

// get place by place id
router.get("/:placeId", getPlaceByPlaceId)

// get place by place id
router.get("/user/:userId", getPlaceByUserId)

// create place || method post || create a new place
router.post("/", validateCreatePlace, createPlaceController);

// update place 
router.patch("/:placeId", validateUpdatePlace, updatePlaceController);

export default router;
