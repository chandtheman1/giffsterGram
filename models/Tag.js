const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Tag extends Model {}

Tag.init({
    id: {
        type: DataTypes.INTEGER,
        allowNulls: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNulls: false,
        validate :{
            len:[2, 10],
        }
    },
    gif_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'gif',
          key: 'id'
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