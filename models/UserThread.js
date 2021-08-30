const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class UserThread extends Model {}

UserThread.init(
  {
    // define columns
    id: {
      type:DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
      autoIncrement:true
    },
    user_id :{
      type:DataTypes.INTEGER,
      references:{
        model:'user',
        key:'id'
      }
    },
    thread_id : {
      type:DataTypes.INTEGER,
      references:{
        model:'thread',
        key:'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user_thread',
  }
);

module.exports = UserThread;
