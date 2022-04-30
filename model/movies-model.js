import mongoose from "mongoose";
import moviesSchema from "../schema/movie-schema.js";

const moviesModel = mongoose.model('MoviesModel', moviesSchema)
export default moviesModel;