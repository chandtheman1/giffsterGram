// import models
const User = require('./User');
const Gif = require('./Gif');
const Thread = require('./Thread');
const Tag = require('./Tag');

Thread.hasMany(User,{
  foreignKey:'group_id',
});

User.belongsToMany(Thread,{
  foreignKey:'group_id'
});

Gif.hasMany(Tag,{
  foreignKey:'tag_id',
});

Tag.belongsToMany(Gif,{
  foreignKey:'tag_id',
});




module.exports = {
  User,
  Gif,
  Thread,
  Tag,
};
