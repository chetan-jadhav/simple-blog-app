'use strict';

module.exports = (sequelize, DataTypes) => {
  var Post = sequelize.define('Post', {
    uuid: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    status: {
      type: DataTypes.ENUM,
      values: ['published', 'draft', 'deleted']
    }
  },{
    classMethods: {
      associate: function(models) {
        models.Post.hasMany(models.Comment);
      }
    },
    tableName: 'posts'
  });

  return Post;
}
