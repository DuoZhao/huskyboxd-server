import * as userDao from "../dao/users-dao.js";

const signup = async (req, res) => {
    const credentials = req.body;
    const existingUser = await userDao.findUserByEmail(credentials.email)
    if (existingUser) {
        return res.sendStatus(403)
    } else {
        const newUser = await userDao.createUser(credentials)
        req.session['profile'] = newUser
        res.json(newUser)
    }
}

const login = async (req, res) => {
    const credentials = req.body;
    const profile = await userDao
        .findUserByCredentials(credentials.email, credentials.password)
    if (profile) {
        req.session['profile'] = profile;
        res.json(profile);
        return;
    }
    res.sendStatus(403);
}

const profile = async (req, res) => {
    let profile = req.session['profile']
    if (profile) {
        profile = await userDao.findUserByCredentials(profile.email, profile.password)
        if (profile) {
            res.json(profile)
        } else {
            res.sendStatus(503)
        }
    } else {
        res.sendStatus(503)
    }
}

const logout = (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
}

const findUsers = (req, res) => {
    res.json(users);
}

export default (app) => {
    app.post('/api/signup', signup);
    app.post('/api/signuprealid', signup);
    app.post('/api/profile', profile);
    app.post('/api/signin', login);
    app.post('/api/logout', logout);
    app.get('/api/user', findUsers);
}