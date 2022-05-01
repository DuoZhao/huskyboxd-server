import mongoose from "mongoose";

const movieSchema = mongoose.Schema({
    Title : String,
    Year : String,
    Rated : String,
    Released: String,
    Runtime: String,
    Genre: String,
    Director: String,
    Writer: String,
    Actors: String,
    Plot: String,
    Language : String,
    Country : String,
    Awards : String,
    Poster : String,
    Ratings : Array,
    Metascore : String,
    imdbRating : String,
    imdbVotes : String,
    imdbID: String,
    Type : String,
    DVD : String,
    BoxOffice : String,
    Production : String,
    Website : String,
    Response : String,
    history_comment:
        {
            type: Array,
            default: []
        },

}, {collection: 'movies'});
export default movieSchema;