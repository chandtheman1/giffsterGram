const  { Model, DataTypes } =require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {
    checkPassword(loggedInPwd) {
        return bcrypt.compareSync(loggedInPwd, this.password);
    }
}

User.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull:false,
            primaryKey : true,
            autoIncrement:true,            
        },
        username: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull :false,
            validate :{
                len:[8,15],
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull:false,
            unique : true,
            validate : {
                isEmail :true,
            },          
        },
        group_id: {
            type: DataTypes.INTEGER,
            references: {
                model:'group',
                key:'id'
            }
        }

    },
    {   hooks: {
        beforeCreate: async (newUserData) =>{
            newUserData.password = await bcrypt.hash(newUserData.password,15);
            return newUserData;
        },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName :'user',
    }
);

module.exports = User;