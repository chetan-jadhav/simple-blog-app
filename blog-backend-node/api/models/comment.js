'use strict';

module.exports = (sequelize, DataTypes) => {
  var Comment = sequelize.define('Comment', {
    name: DataTypes.STRING,
    comment: DataTypes.TEXT,
    post_id: DataTypes.UUID
  }, {
    tableName: 'comments'
  });
  Comment.associate = function(models) {
    Comment.belongsTo(models.Post, { foreignKey: 'post_id' })
  };
  return Comment;
};
