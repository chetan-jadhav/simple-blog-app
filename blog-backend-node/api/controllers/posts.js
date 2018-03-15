'user strict';
var Post = require('../models').Post;
var Comment = require('../models').Comment;

exports.list = function(req, res) {
  console.log("Get Posts");
  return Post
    .findAll({ include: [{
        model: Comment
      }],
    })
    .then(posts => res.status(200).send(posts))
    .catch(error => res.status(400).send(error))
}

exports.create = function(req, res) {
  console.log("Post", Post);
  console.log("Comment", Comment);
  return Post
    .create(req.body)
    .then(post => res.status(201).send(post))
    .catch(error => res.status(400).send(error));
}

exports.show = function(req, res) {
  return Post
    .findById(req.params.postId, {
      include: [{
        model: Comment
      }]
    })
    .then(post => {
      if(!post){
        return res.status(404).send({
          message: 'Post not found!',
        });
      }
      res.status(200).send(post);
    })
    .catch(error => res.status(400).send(error));
}

exports.update = function(req, res) {
  return Post
    .findById(req.params.postId, {
      include: [{
        model: Comment,
        as: 'comments'
      }],
    })
    .then(post => {
      if(!post){
        return res.status(404).send({
          message: 'Post not found!'
        })
      }
      return post
        .update(req.body)
        .then(() => res.status(200).send(post))
        .catch((error) => res.status(400).send(error))
    })
    .catch((error) => res.status(400).send(error))
}

exports.delete = function(req, res) {
  return Post
    .findById(req.params.postId, {
      include: [{
        model: Comment,
        as: 'comments'
      }],
    })
    .then(post => {
      if(!post){
        return res.status(404).send({
          message: 'Post not found!'
        })
      }
      return post
        .update({status: 'deleted'})
        .then(() => res.status(200).send(post))
        .catch((error) => res.status(400).send(error))
    })
    .catch((error) => res.status(400).send(error))
}
