const { sequelize, DataTypes} = require('sequelize')
const db = require("../config/database.js")
const constants = require("../config/Constants.js")

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

/* Area for Setting the Datatable flag of Alter and Force*/
//#region  
Affirmation.sync({alter:constants.ALTER_AFFIRMATIONS})
.then(() => {
    console.log('Affirmation table synced successfully with Affirmation Change with flag set as ' + constants.ALTER_AFFIRMATIONS);
})
.catch((error) => {
    console.error('Error syncing Affirmation table:', error);
}); 

Affirmation.sync({force:constants.FORCE_SYNC_AFFIRMATIONS})
.then(() => {
    console.log('Affirmation table synced successfully with force change and flag set as ' + constants.FORCE_SYNC_AFFIRMATIONS);
})
.catch((error) => {
    console.error('Error syncing Affirmation table:', error);
}); 
//#endregion

module.exports = Affirmation;