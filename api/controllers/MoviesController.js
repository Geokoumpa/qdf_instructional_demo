/**
 * MoviesController
 *
 * @description :: Server-side logic for managing movies
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function (req, res){
    return res.view('movies/index', {model: [{title: "Test 1"}, {title: "test2"}]})
  },

  new: function (req, res){
    return res.view('movies/new')
  },
  create: function (req, res){
    var params = _.extend(req.query || {}, req.params || {}, req.body || {});
    return res.redirect('/movies')
  }
};

