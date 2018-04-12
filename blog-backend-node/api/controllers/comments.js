'use strict';

var models = require('../models/index');

exports.list = function(req, res){
  return models.Comment
    .findAll({ where: { post_id: req.params.postId } })
    .then(comments => res.status(200).send(comments))
    .catch(error =>  res.status(400).send(error));
}

exports.create = function(req, res){
  return models.Post
    .findById(req.params.postId)
    .then(post => {
      models.Comment.create(req.body)
        .then(comment => {
          post.addComment(comment).then( () => {
            res.status(200).send(comment);
          })
        .catch(error => res.status(400).send(error))
        })
    })
    .catch(error => res.status(400).send(error))
}

exports.show = function(req, res){
  return models.Comment
    .findById(req.params.commentId)
    .then(comment => {
      if(!comment){
        return res.status(404).send({
          message: 'Comment not found!',
        });
      }
      res.status(200).send(comment);
    })
    .catch(error => res.status(400).send(error));
}

exports.update = function(req, res){
  return models.Comment
    .findById(req.params.commentId)
    .then(comment => {
      if(!comment){
        return res.status(404).send({
          message: 'Comment not found!'
        })
      }
      return comment
        .update(req.body)
        .then(() => res.status(200).send(comment))
        .catch((error) => res.status(400).send(error))
    })
    .catch((error) => res.status(400).send(error))
}

exports.destroy = function(req, res){
  return models.Comment
    .findById(req.params.commentId)
    .then(comment => {
      if(!comment){
        return res.status(404).send({
          message: 'Comment not found!'
        })
      }
      return comment
        .update({status: 'deleted'})
        .then(() => res.status(200).send(comment))
        .catch((error) => res.status(400).send(error))
    })
    .catch((error) => res.status(400).send(error))
}
