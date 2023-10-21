import placeModel from "../models/placeModel.js";
import mongoose from "mongoose";


export const createPlaceController = async (req, res) => {
    const { title, description, address, creator } = req.body; // make sure to include coordinates in the destructuring

    const createdPlace = new placeModel({
        title,
        description,
        address,
        imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipORvpqm0sdJZYfvmVzJYKMDhimwUM7snItkH96y=w408-h302-k-no',
        creator
    });

    try {
        const savedPlace = await createdPlace.save(); // save the place
        res.status(201).json({ place: savedPlace }); // send the saved place in the response
    } catch (err) {
        res.status(500).json({ message: "Error while creating place", error: err });
    }
};

