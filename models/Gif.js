const  { Model, DataTypes } =require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
const { Gifs } = require('.');

class Gif extends Model {}

Gif.init({
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
      },
      tag_id:{
        type:DataTypes.INTEGER,
        references:{
          model:'tag',
          key:'id'
        }
      },
      image:{
          type:DataTypes.BLOB,
         allowNull:false, 
      },
      like: {
        type:DataTypes.INTEGER,
        allowNull:true, 
      },
      dislike : {
        type:DataTypes.INTEGER,
        allowNull:true, 
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
    