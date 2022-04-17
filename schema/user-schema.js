import mongoose from "mongoose";

const usersSchema = mongoose.Schema({
    id: {type: String, default: mongoose.Types.ObjectId, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    username: {type: String}
}, {collection: 'users'});
export default usersSchema;