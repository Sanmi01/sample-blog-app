'use strict';
module.exports = (sequelize, DataTypes) => {
  var Comment = sequelize.define('Comment', {
    title: DataTypes.STRING,
    username: DataTypes.STRING,
    body: DataTypes.STRING,
  });

  return Comment;
};

// Make sure you complete other models fields