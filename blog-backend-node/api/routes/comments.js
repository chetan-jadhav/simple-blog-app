'use strict';

module.exports = function(app){
  var commentActions = require('../controllers/comments');

  app.route('/post/:postId/comments')
    .get(commentActions.list)
    .post(commentActions.create)

  app.route('/post/:postId/comment/:commentId')
    .get(commentActions.show)
    .put(commentActions.update)
    .delete(commentActions.destroy)
}
