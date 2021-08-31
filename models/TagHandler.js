const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class TagHandler extends Model {}

TagHandler.init(
  {
    id: {
      type:DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    gif_id: {
      type:DataTypes.INTEGER,
      references: {
        model: 'gif',
        key: 'id'
      }
    },
    tag_id: {
      type:DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'TagHandler',
  }
);

module.exports = TagHandler;