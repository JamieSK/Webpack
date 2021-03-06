let Film = function(options) {
  this.title = options.title;
  this.genre = options.genre;
  this.actors = options.actors;
  this.reviews = options.reviews || [];
};

Film.prototype = {
  addReview: function(review) {
    this.reviews.push(review);
  },
};

module.exports = Film;
