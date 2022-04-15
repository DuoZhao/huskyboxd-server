import mongoose from "mongoose";
import usersSchema from "../schema/user-schema.js";

const usersModel = mongoose.model('UsersModel', usersSchema)
export default usersModel;