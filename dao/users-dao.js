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


export const updateUserReal = (id, user) =>
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


export const updateFavoriteMovie = (id, m_id) =>
    userModel.updateOne(
        {_id: id},
        {$addToSet: {'favorite_movie': m_id}}
    );

export const updateHistoryMovie = (id, m_id) =>
    userModel.updateOne(
        {_id: id},
        {$addToSet: {'history_movie': m_id}}
    );
