'use strict';

module.exports = function(app) {
  var postActions = require('../controllers/posts');

  // Post routes
  app.route('/posts')
    .get(postActions.list)
    .post(postActions.create)

  app.route('/post/:postId')
    .get(postActions.show)
    .put(postActions.update)
    .delete(postActions.delete)
};
