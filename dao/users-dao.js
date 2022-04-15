import userModel from "../model/users-model.js";

export const findAllUsers = () => userModel.find();

export const findUserById = (id) => userModel.findById(id);

export const findUserByEmail = (email) => userModel.findOne({email})

export const findUserByCredentials = (email, password) => userModel.findOne({email, password})

export const createUser = (user) => userModel.create(user)

export const updateUser = (id, user) =>
    userModel.updateOne(
        {_id: id},
        { $set: user}
        // {
        //   $set: {
        //     email: user.email,
        //     password: user.password,
        //     firstName: user.firstName,
        //     lastName: user.lastName
        //   }
        // }
    );

export const deleteUser = (id) => userModel.deleteOne({_id: id})
