const  { Model, DataTypes } =require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

Thread.init({
    id: {
        type: DataTypes.INTEGER,
        allowNulls:false,
        primaryKey: true,
        autoIncrement:true
    },
    name: {
        type: DataTypes.STRING,
        allowNulls:false,
        validate :{
            len:[2, 10],
        }

    },
    user_id: {
        type:DataTypes.INTEGER,
        references: {
            model:'user',
            key:'id'
        }
    },
    public_visibility: {
        type:DataTypes.BOOLEAN,
        allowNulls:false
    },

    thread_admin: {
        type:DataTypes.INTEGER,
        references: {
            model:'user',
            key:'id'
        }
    }
    
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'thread',
  }
);

module.exports = Thread;


