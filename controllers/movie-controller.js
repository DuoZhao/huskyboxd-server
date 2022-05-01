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
    app.put('/api/movies/update/:id', updateMovieComment);

}