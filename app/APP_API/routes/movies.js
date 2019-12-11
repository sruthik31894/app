const express = require('express');
const router = express.Router();
const ctrlMovie = require('../controller/movie');
router 
.route('/movies')
 .get(ctrlMovie.getMovies) 
  .post(ctrlMovie.createMovies); 
router
 .route('/movies/:movieid') 
 .get(ctrlMovie.getSingleMovies) 
.put(ctrlMovie.updateMovies)
.delete(ctrlMovie.deleteMovies);

// router.route('/editmovie/:movieid')
// .put(ctrlMovie.updateEditedMovie)
// .delete(ctrlMovie.deleteEditedMovie);

module.exports = router;