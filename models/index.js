// import models
const User = require('./User');
const Gif = require('./Gif');
const Comment = require ('./Comment');

User.hasMany(Gif,{
  foreignKey:'author',
  onDelete:'cascade'
});

Gif.hasMany(Comment,{
  foreignKey:'gif_id',
  onDelete:'cascade'
});

Comment.belongsTo(User,{
  foreignKey:'author',
  onDelete:'cascade'
});

module.exports = {
  User,
  Gif,
  Comment,
};