import movieModel from "../model/movies-model.js"


export const findAllMovies = () => movieModel.find();

export const findMovieByimdbID = (imdbID) => movieModel.findOne({imdbID});

export const createMovie = (movie) => movieModel.create(movie)

export const updateMovieComment = (imdbID, comment) => movieModel.updateOne({imdbID: imdbID}, {$push: {"history_comment": comment}})

export const getRandomMovie = (n) => movieModel.find().limit(n);

export const findMovieIDList = (movieList) => movieModel.find({imdbID: {$in: movieList}});
