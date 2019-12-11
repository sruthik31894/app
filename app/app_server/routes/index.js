const express = require('express');
var router = express.Router();

/* GET home page. */
var ctrlList = require('../controllers/movie');

var ctrlAbout = require('../controllers/about');

router.get('/', function(req, res) {
  res.render('index', { title: 'Welcome to Movie Store' });
});
router.get('/about',ctrlAbout.about);
router.get('/list',ctrlList.movieList);
router.route('/new')
        .get(ctrlList.addNewMovie)
        .post(ctrlList.doAddNewMovie);
router.get('/movies/:movieid', ctrlList.movieInfo);

module.exports = router;
