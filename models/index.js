// import models
const User = require('./User');
const Gif = require('./Gif');
const Comment = require ('./Comment');

User.hasMany(Gif,{
  foreignKey:'author',
  onDelete:'cascade'
});

Gif.belongsTo(User, {
  foreignKey:'author',
});

Gif.hasMany(Comment,{
  foreignKey:'gif_id',
  onDelete:'cascade'
});

Comment.belongsTo(Gif, {
  foreignKey:'gif_id',
});

User.hasMany(Comment, {
  foreignKey:'author',
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