import mongoose from "mongoose";

const usersSchema = mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    username: {type: String},
    bannerPicture:{type: String, default: ""},
    profilePicture: {type: String, default: ""},
    bio: {type: String, default: ""},
    website: {type: String, unique: true, default: ""},
    location: {type: String, default: ""},
    films: {type: Number, default: 0},
    thisyear: {type: Number , default: 0},
    lists: {type: Number, default: 0},
    followingCount: {type: Number, default: 0},
    followersCount: {type: Number, default: 0},
    favorite_movie:{type: Array, default: []},
    recent_movie:{type: Array, default: []},
    history_movie:{type: Array, default: []}



}, {collection: 'users'});
export default usersSchema;