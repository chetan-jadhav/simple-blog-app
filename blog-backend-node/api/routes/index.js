const posts = require('./posts');
const comments = require('./comments');

module.exports = function(app) {
  posts(app),
  comments(app)
}
