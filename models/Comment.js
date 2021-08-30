const { Model, DataTypes } = require('sequelize');
const bcrypt =require('bcrypt');
const sequelize = require('../config/connection');


class Comment extends Model {}

Comment.init({
    id: {
        type: DataTypes.INTEGER,
        allowNulls:false,
        primaryKey: true,
        autoIncrement:true
    },
    content:{
        type:DataTypes.STRING,
        allowNull:false
    },
    thread_id: {
        type:DataTypes.INTEGER,
        references: {
            model:'thread',
            key:'id'
        }
    },

},
{
    sequelize
}

);

module.exports =Comment;