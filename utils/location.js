import axios from 'axios';
import dotenv from 'dotenv';

export const getCoordsForAddress = async (address) => {

    const MAP_API_KEY = process.env.MAP_API_KEY

    const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${MAP_API_KEY}`);

    const data = response.data;
    if(! data || data.status === "ZERO_RESULTS"){
        return {"message" : "place does not exist"}
    }

    const coordinates = data.results[0].geometry.location;
    console.log(coordinates);

    return coordinates;

}