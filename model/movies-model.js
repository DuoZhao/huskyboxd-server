import mongoose from "mongoose";
import movieSchema from "../schema/movie-schema.js";


const moviesModel = mongoose.model('MoviesModel', movieSchema)
export default moviesModel;

