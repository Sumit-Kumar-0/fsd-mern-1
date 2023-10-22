import placeModel from "../models/placeModel.js";
import { validationResult } from "express-validator";

// get all places
export const getAllPlace = async (req, res) => {
  try {
    const places = await placeModel.find();
    res.json(places);
  } catch (err) {
    res.json({ message: err });
  }
};

// get place by place id
export const getPlaceByPlaceId = async (req, res) => {
  try {
    const place = await placeModel.findById(req.params.placeId);
    res.json({ place: place.toObject({ getters: true }) });
  } catch (err) {
    res.json({ message: err });
  }
};

// get place by user id
export const getPlaceByUserId = async (req, res) => {
  const userId = req.params.userId;
  let places;
  try {
    places = await placeModel.find({ creator: userId });
  } catch (err) {
    res
      .status(500)
      .json({ err, message: "issue while finding place by user id" });
  }

  res.json({
    places: places.map((place) => place.toObject({ getters: true })),
  });
};
// create new place
export const createPlaceController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { title, description, address, coordinates, creator } = req.body;
  const createdPlace = new placeModel({
    title,
    description,
    imageUrl: "test/url",
    address,
    // location: coordinates,
    creator,
  });

  try {
    const savedPlace = await createdPlace.save(); // save the place
    res.status(201).json({ place: savedPlace }); // send the saved place in the response
  } catch (err) {
    res.status(500).json({ message: "Error while creating place", error: err });
  }
};

export const updatePlaceController = async (req, res) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array(), message: "validation error while updating" });
  }

  const { title, description } = req.body;
  const placeId = req.params.placeId;

  let place;
  try {
    place = await placeModel.findById(placeId);
    place.title = title;
    place.description = description;
  } catch (err) {
    res.status(400).json({ message: "Error while updathing place", error: err });
  }

  try{
    await place.save()
  } catch (err) {
    res.status(500).json({ message: "Error while updathing place from server", error: err });
  }

  res.status(200).json({place: place.toObject({getters:true})});
};
