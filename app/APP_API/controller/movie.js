const mongoose = require('mongoose');
const Movie = mongoose.model('Movie');


const getMovies = function(req, res) {
    Movie.find().exec(function(err, moviedata){
        if (err) {
            res
            .status(404)
            .json(err);
        return;
        }
        res
        .status(200)
        .json(moviedata);
    });
};

const createMovies = function (req, res) {
    Movie.create({
       name: req.body.name,
       type: req.body.type,
        
   }, (err, moviedata) => {
       if (err) {
           res
           .status(400)
           .json(err);
       } else {
           res
           .status(201)
           .json(moviedata);
       }
   });
};

const getSingleMovies = function (req, res) {
     res
    Movie.findById(req.params.movieid)
    .exec((err,movie) => {
       if(!movie){
           return res.status(404)
           .json({
               "message":"Movie not found"
           });
       }else if (err){
           return res.status(404)
                    .json(err);
       }
       res.status(200)
       .json(movie);
   });
};


const updateMovies = function (req, res) {
    if(!req.params.movieid){
        res
        .status(404)
        .json({"message": "Not found, movie is is required"});
        return;
    }
    Movie.findById(req.params.movieid)
    .exec((err, moviedata) => {
        if(!moviedata){
            res
            .status(404)
            .json({"message" : "movieid not found"});
        return
        } else if (err){
            res
            .status(400)
            .json(err);
            return;
        }
        moviedata.name = req.body.name;
        moviedata.type = req.body.type;
        moviedata.save((err, moviedata) => {
            if(err) {
                res
                .status(404)
                .json(err);
            } else{
                res.status(200)
                .json(moviedata);
            }
        });  
    });
};

const deleteMovies = function(req,res) {
    const movieid  = req.params.movieid;
    if(movieid){
        Movie.findByIdAndRemove(movieid)
        .exec((err,moviedata) => {
            if(err){
                res.status(404)
                .json(err);
                return;
            }
            res
            .status(204)
            .json(null);
        });
    }
    else{
        res.status(404)
        .json({"message" : "No movieid"});
    }
};



module.exports = {
    getMovies,
    createMovies,
    getSingleMovies,
     updateMovies,
    //updateEditedMovie,
    //deleteEditedMovie
    deleteMovies
};