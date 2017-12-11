// since we don't have a database we'll use our front end models at the moment
let films = require('../client/src/models/films')();
let Film = require('../client/src/models/film');
let Review = require('../client/src/models/review');

let express = require('express');
let filmRouter = new express.Router();

filmRouter.get('/', function(req, res) {
  res.json(films);
});

filmRouter.post('/', function(req, res) {
  films.push(req.body.film);
  res.json(films);
});

filmRouter.post('/review/:id', function(req, res) {
  films[req.params.id].reviews.push(req.body.review);
  res.json(films);
});

filmRouter.get('/:id', function(req, res) {
  res.json({data: films[req.params.id]});
});

filmRouter.put('/:id', function(req, res) {
  films[req.params.id] = req.body.film;
  res.json(films);
});

filmRouter.delete('/:id', function(req, res) {
  films.splice(req.params.id, 1);
  res.json(films);
});

module.exports = filmRouter;
