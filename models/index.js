// import models
const User = require('./User');
const Gif = require('./Gif');
const Thread = require('./Thread');
const Tag = require('./Tag');
const Comment = require ('./Comment');

User.hasMany(Thread,{
  foreignKey:'group_id',
});

Thread.belongsToMany(Users,{
  foreignKey:'group_id'
});

Thread.hasMany(User, {
  foreignKey : 'user_id',
})

User.belongsToMany(Thread,{
  foreignKey:'user_id',
})

Gif.hasMany(Tag,{
  foreignKey:'tag_id',
});

Tag.belongsToMany(Gif,{
  foreignKey:'tag_id',
});

Thread.hasMany(Comment,{
  foreignKey:'comment_id',
})




module.exports = {
  User,
  Gif,
  Thread,
  Tag,
  Comment,
};
