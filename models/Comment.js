const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init({
    id: {
        type: DataTypes.INTEGER,
        allowNulls: false,
        primaryKey: true,
        autoIncrement: true
    },
    comment_text: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        }
    },
    date_created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.fn('NOW')
    },
    gif_id:{
        type: DataTypes.INTEGER,
        references: {
            model: 'gif',
            key: 'id'
        }
    }
},
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
    });

module.exports = Comment;