// import models
const User = require('./User');
const Gif = require('./Gif');
const Thread = require('./Thread');
const Tag = require('./Tag');
const Comment = require ('./Comment');
const UserThread = require('./UserThread');

User.belongsToMany(Thread, {
  through: UserThread,
  foreignKey:'user_id',
});

Thread.belongsToMany(User,{
  through: UserThread,
  foreignKey:'thread_id'
})

Gif.hasMany(Tag,{
  foreignKey:'tag_id',
});

Tag.belongsToMany(Gif,{
  foreignKey:'tag_id',
});

Thread.hasOne(Comment,{
  foreignKey:'thread_id',
});

Comment.belongsTo(Thread,{
  foreignKey:'thread_id',
})




module.exports = {
  User,
  Gif,
  Thread,
  Tag,
  Comment,
};
