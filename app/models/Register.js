const { sequelize, DataTypes} = require('sequelize')
const db = require("../config/database")

const Register = db.define('Register',{
    id:{
        type:DataTypes.BIGINT,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    emailAddress:{
        type:DataTypes.STRING,
        allowNull:false,
        
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    confirmPassword:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    Name:{
        type:DataTypes.STRING,
        allowNull:true
    },
    token:{
        type:DataTypes.STRING,
        allowNull:false
    }

},{
    freezeTableName:true,
    tablename:"Register"
}
)

//Register.sync();

module.exports = Register;