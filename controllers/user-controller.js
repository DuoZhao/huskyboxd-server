import * as userDao from "../dao/users-dao.js";
import mongoose from "mongoose";


const findAllUsers = async (req, res) => {
    const users = await userDao.findAllUsers()
    res.json(users)
}

const findUserById = async (req, res) => {
    const userId = req.params['id']

    if (!mongoose.isObjectIdOrHexString(userId)) {
        res.sendStatus(404);
        return;
    }

    const user = await userDao.findUserById(userId)
    if (user) {
        res.json(user)
    } else {
        res.sendStatus(404)
    }
}

const findUserByEmail = async (req, res) => {
    const email = req.params.email
    const user = await userDao.findUserByEmail(email)
    if (user) {
        res.json(user)
    } else {
        res.sendStatus(404)
    }
}

const findUserByCredentials = async (req, res) => {
    const credentials = req.body
    const {email, password} = credentials
    const user = await userDao.findUserByCredentials(
        email, password
    )
    if (user) {
        res.sendStatus(200)
    } else {
        res.sendStatus(403)
    }
}

const createUser = async (req, res) => {
    const user = req.body
    const insertedUser = await userDao.createUser(user)
    res.json(insertedUser)
}
// const updateUser = async (req, res) => {
//     const user = req.body
//     const userId = req.params['id']
//     const status = await userDao.updateUser(userId, user)
//     res.json(status)
// }


const updateUser = async (req, res) => {
    const user = req.body
    const userId = req.params['id']
    const status = await userDao.updateUser(userId, user)
    res.json(status)
}

const updateUserReal = async (req, res) => {
    const user = req.body
    const userId = req.params['id']
    const status = await userDao.updateUserReal(userId, user)
    res.json(status)
}

const deleteUser = async (req, res) => {
    const userId = req.params['id']
    const status = await userDao.deleteUser(userId)
    res.json(status)
}

const updateFavoriteMovie = async (req, res) => {
    const userId = req.params['id'];
    const movieId = req.body["movieID"];
    const status = await userDao.updateFavoriteMovie(userId, movieId)
    res.json(status);
}

const updateHistoryMovie = async (req, res) => {
    const userId = req.params['id']
    const movieId = req.body["movieID"];
    const status = await userDao.updateHistoryMovie(userId, movieId)
    res.json(status);

}

export default (app) => {
    app.get('/api/users', findAllUsers);
    app.get('/api/users/:id', findUserById);
    app.get('/api/users/email/:email', findUserByEmail);
    app.post('/api/users/credentials', findUserByCredentials);
    app.post('/api/users', createUser);
    app.put('/api/users/:id', updateUser);
    // app.put('/api/users/:id', updateUserReal);
    app.delete('/api/users/:id', deleteUser);
    app.put('/api/users/update/favorite/:id', updateFavoriteMovie)
    app.put('/api/users/update/history/:id', updateHistoryMovie)
}