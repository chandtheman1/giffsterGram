const  { Model, DataTypes } =require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

Tag.init({
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
    isPublic : {
        type: DataTypes.BOOLEAN,
        allowNulls : false,       
    },
    admin: {
        type:DataTypes.INTEGER,
        references: {
            model:'user',
            key:'id'
        }
    },
},

    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'tag',
      }
);
    
    module.exports = Tag;
    
