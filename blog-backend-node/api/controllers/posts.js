'use strict';

var models = require('../models/index');

exports.list = function(req, res) {
  return models.Post
    .findAll({ include: [{
        model: models.Comment,
        as: 'comments'
      }],
    })
    .then(posts => res.status(200).send(posts))
    .catch(error => {
      console.dir(error)
      res.status(400).send(error)
    })
}

exports.create = function(req, res) {
  return models.Post
    .create(req.body)
    .then(post => res.status(201).send(post))
    .catch(error => res.status(400).send(error));
}

exports.show = function(req, res) {
  return models.Post
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
  return models.Post
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
  return models.Post
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
