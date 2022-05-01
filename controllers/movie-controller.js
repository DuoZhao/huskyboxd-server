import * as movieDao from "../dao/movies-dao.js";
import mongoose from "mongoose";

// test
const findAllMovies = async (req, res) => {
    const ms = await movieDao.findAllMovies()
    res.json(ms)
}

const findMovieByimdbID = async (req, res) => {
    const imdbID = req.params["id"]
    const movie = await movieDao.findMovieByimdbID(imdbID)
    res.json(movie);
}


const createMovie = async (req, res) => {
    const movie = req.body
    const new_movie = await movieDao.createMovie(movie)
    res.json(new_movie)
}

function shuffle (array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};

const getRandomMovie = async (req, res) => {
    const n = req.params["size"];
    const rm = await movieDao.getRandomMovie(n);
    shuffle(rm)
    res.json(rm)
}


const updateMovieComment = async (req, res) => {
    const imdbID = req.params['id'];
    const comment = req.body;
    const movie = await movieDao.updateMovieComment(imdbID, comment);
    res.json(movie);
}

export default (app) => {
    app.get('/api/movies', findAllMovies);
    app.get('/api/movies/:id', findMovieByimdbID);
    app.post('/api/movies', createMovie);
    app.get('/api/movies/random/:size', getRandomMovie);
    app.put('/api/movies/update/:id', updateMovieComment);
}