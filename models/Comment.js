const { Model, DataTypes } = require('sequelize');
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
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Comment',
});

module.exports = Comment;