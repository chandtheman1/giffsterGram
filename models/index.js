// import models
const User = require('./User');
const Gif = require('./Gif');
const Thread = require('./Thread');
const Tag = require('./Tag');
const Comment = require ('./Comment');
const UserThread = require('./UserThread');
const TagHandler = require('./TagHandler');

User.belongsToMany(Thread, {
  through: UserThread,
  foreignKey: 'user_id',
});

Thread.belongsToMany(User,{
  through: UserThread,
  foreignKey: 'thread_id'
});

Tag.belongsToMany(Gif, {
  through: TagHandler,
  foreignKey: 'gif_id',
});

Gif.belongsToMany(Tag, {
  through: TagHandler,
  foreignKey:'tag_id',
});

Comment.belongsTo(Thread, {
  foreignKey: 'thread_id',
})

module.exports = {
  User,
  Gif,
  Thread,
  Tag,
  Comment,
};