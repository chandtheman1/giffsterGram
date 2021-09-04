const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Gif extends Model {}

Gif.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
    name: {
        type: DataTypes.STRING,
        allowNull:false

      },
    imageData: {
        type: DataTypes.BLOB('long'),
        allowNull: false, 
      },
    like: {
        type: DataTypes.INTEGER,
        allowNull: true, 
      },
    dislike: {
        type: DataTypes.INTEGER,
        allowNull: true, 
      },
      author: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        }
      }
},
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'gif',
  },
);

module.exports = Gif;    