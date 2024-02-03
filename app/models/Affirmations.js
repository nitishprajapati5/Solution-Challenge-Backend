const { sequelize, DataTypes} = require('sequelize')
const db = require("../config/database")

const Affirmation = db.define("Affirmation",{
    id:{
        type:DataTypes.BIGINT,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    AffirmationType:{
        type:DataTypes.STRING,
        allowNull:true
    },
    AffirmationNotes:{
        type:DataTypes.STRING,
        allowNull:false
    }
},
    {
        freezeTableName:true,
        tablename:"Affirmation"
    }
)

module.exports = Affirmation;