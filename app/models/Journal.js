const {DataTypes} = require('sequelize')
const db = require("../config/database")

const Journal = db.define('Journal',{
    id:{
        type:DataTypes.BIGINT,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    createdById:{
        type:DataTypes.BIGINT,
        allowNull:false,
    },
    createdByName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    journalType:{
        type:DataTypes.STRING,
        allowNull:true
    },
    journalContent:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    isDisabled:{
        type:DataTypes.BOOLEAN,
        defaultValue : false
    }
    },
    {
        freezeTableName:true,
        tablename:"Journal"
    }

)

Journal.sync();

module.exports = Journal;