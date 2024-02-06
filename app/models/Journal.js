const {DataTypes} = require('sequelize')
const db = require("../config/database")
const constants = require("../config/Constants.js")

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

/* Area for Journal Setting for  Flag for Force and Alter Commands*/
//#region 
Journal.sync({alter:constants.ALTER_JOURNAL})
.then(() => {
    console.log('Journal table synced successfully with Affirmation Changes with flag set as ' + constants.ALTER_JOURNAL);
})
.catch((error) => {
    console.error('Error syncing Journal table:', error);
});

Journal.sync({force:constants.FORCE_SYNC_JOURNAL})
.then(() => {
    console.log('Journal table synced successfully with force change and flag set as. ' + constants.FORCE_SYNC_JOURNAL);
})
.catch((error) => {
    console.error('Error syncing Journal table:', error);
});
//#endregion
module.exports = Journal;