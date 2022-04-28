import mongoose from "mongoose";

const movieSchema = mongoose.Schema({
    m_id: {type: String, default: mongoose.Types.ObjectId, unique: true},
    name: {type: String},
    year: {type: Number},
    bannerPicture:{type: String},
    moviePoster: {type: String},
    description: {type: String},
    director: {type: Number},
    history_comment:{type: Array, default: [{_id: {type: String}, comment: String, profilePicture: {type: String }, likes: Number},{_id: {type: String}, comment: String, profilePicture: {type: String}, likes: Number}]},

}, {collection: 'movie'});
export default movieSchema;