'use strict';

module.exports = (sequelize, DataTypes) => {
  var Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    status: DataTypes.ENUM('published', 'draft', 'deleted')
  }, {
    tableName: 'posts'
  });
  Post.associate = function(models) {
    Post.hasMany(models.Comment, { foreignKey: 'post_id', as: 'comments' });
  };
  return Post;
};
