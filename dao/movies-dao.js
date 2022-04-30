import movieModel from "../model/movies-model.js"


export const findAllMovies = () => movieModel.find();

export const findMovieByimdbID = (imdbID) => movieModel.findOne({imdbID});

export const createMovie = (movie) => movieModel.create(movie)
