'use strict';
const models = require('./index');

module.exports = (sequelize, DataTypes) => {
  var Comment = sequelize.define('Comment', {
    uuid: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    comment: DataTypes.TEXT,
    post_uuid: {
      type: DataTypes.UUID,
      model: models.Post,
      key: 'uuid'
    }
  },{
    classMethods: {
      associate: function(models) {
        models.Comment.belongsTo(models.Post, {foreignKey: 'uuid', as: 'postComments'});
      }
    },
    tableName: 'comments'
  });

  return Comment;
}
