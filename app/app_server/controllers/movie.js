//const movieList = function (req, res){
//    res.render('list-display',{movies: movieArray});
//};
//const movieArray = [{name:"Annabella", type:"adventure"},
//                   {name:"Toystore",  type:"action"},
//                   {name:"Avengers",  type:"action"}];
//module.exports = {
//    movieList
//}
const request = require('request');
const apiOptions = {server:'http://localhost:3000'};

const _renderHomepage = function(req, res, responseBody) {
    res.render('list-display',{
        movies: responseBody
    });

};
const movieList = function(req, res){
    const path = '/api/movies';
    const requestOptions = {
        url : apiOptions.server + path,
        method : 'GET',
        json : {}
    };
    request(
    requestOptions,
    (err, response, body) => {
        _renderHomepage(req, res, body);
    });
};

const _renderDetailsPage = function (req, res, responseBody) {
    res.render('details', {
        currentMovie: responseBody
    });
};

const movieInfo = function(req,res){
    const path = `/api/movies/${req.params.movieid}`;
    const requestOptions = {
        url : apiOptions.server + path,
        method : 'GET',
        json : {}
    };
    request(
    requestOptions,
    (err, response, body) => {
        _renderDetailsPage(req, res, body);
    });
};

const _renderCreatePage = function(req, res) {
    res.render('create', {
        title: "Create New Movie"
    });
};

const addNewMovie = function (req, res){
    _renderCreatePage(req,res);
};

const doAddNewMovie = function(req,res) {
    const path = '/api/movies';
    const postdata = {
        name: req.body.name,
        type: req.body.type
    };
    const requestOptions = {
        url : apiOptions.server + path,
        method: 'POST' ,
        json: postdata
    };
    request(
    requestOptions,
    (err, response, body) => {
        if (response.statusCode === 201){
            res.redirect('/');
        }
    });
};

module.exports = {
   _renderHomepage, movieList, _renderDetailsPage, movieInfo, doAddNewMovie, addNewMovie
};
