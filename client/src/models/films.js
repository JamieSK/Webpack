let Film = require('./film');
let Review = require('./review');

let Films = function() {
  let review1 = new Review({
    comment: 'It\'s not even a thing. What just happened. I want my life back.',
    rating: 1,
    author: 'Val',
  });

  let review2 = new Review({
    comment: 'Pew pew pew lightsabers space cowboys whoot what\'s not to love',
    rating: 100,
    author: 'Val',
  });

  let film1 = new Film({
    title: 'Now You See Me',
    genre: 'Rubbish',
    actors: ['Woody Harrelson', 'Jesse Eisenberg'],
  });

  let film2 = new Film({
    title: 'Star Wars Episode IV: A New Hope',
    genre: 'Sci-Fi',
    actors: ['Harrison Ford', 'Alec Guiness'],
  });

  film1.addReview(review1);
  film2.addReview(review2);

  return [film1, film2];
};

module.exports = Films;
