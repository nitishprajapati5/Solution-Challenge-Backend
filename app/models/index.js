require("dotenv").config()
const Register = require("./Register.js");
const Affirmation = require("./Affirmations.js");
const Journal = require("./Journal.js")
const constants = require("../config/Constants.js")


//All The Models here should be Register as it is
//Any Module Declared here will be Added and Path will be Give as it is

/* Syncing Area of Force Flag for all the Data Tables*/



//console.log("The Process process.env.ALTER_AFFIRMATIONS",constants.ALTER_AFFIRMATIONS)
//console.log("The process.env.FORCE_SYNC_AFFIRMATIONS is ",booleanAffirmationsAlterSync)
console.log("------------------------------------------------------------------------------------------------------------------------")
//#region For Forcing the Sync for All Tables
Register.sync({alter:constants.ALTER_REGISTER})
.then(() => {
    console.log('Register table synced successfully with Register Changes with flag set as ' + constants.ALTER_REGISTER);
})
.catch((error) => {
    console.error('Error syncing Register table:', error);
});

Journal.sync({alter:constants.ALTER_JOURNAL})
.then(() => {
    console.log('Journal table synced successfully with Affirmation Changes with flag set as ' + constants.ALTER_JOURNAL);
})
.catch((error) => {
    console.error('Error syncing Journal table:', error);
});

Affirmation.sync({alter:constants.ALTER_AFFIRMATIONS})
.then(() => {
    console.log('Affirmation table synced successfully with Affirmation Change with flag set as ' + constants.ALTER_AFFIRMATIONS);
})
.catch((error) => {
    console.error('Error syncing Affirmation table:', error);
}); 

//#endregion

//#region 
Register.sync({force:constants.FORCE_SYNC_REGISTER})
.then(() => {
    console.log('Register table synced successfully with force change and flag set as ' + constants.FORCE_SYNC_REGISTER);
})
.catch((error) => {
    console.error('Error syncing Register table:', error);
});

Journal.sync({force:constants.FORCE_SYNC_JOURNAL})
.then(() => {
    console.log('Journal table synced successfully with force change and flag set as. ' + constants.FORCE_SYNC_JOURNAL);
})
.catch((error) => {
    console.error('Error syncing Journal table:', error);
});

Affirmation.sync({force:constants.FORCE_SYNC_AFFIRMATIONS})
.then(() => {
    console.log('Affirmation table synced successfully with force change and flag set as ' + constants.FORCE_SYNC_AFFIRMATIONS);
})
.catch((error) => {
    console.error('Error syncing Affirmation table:', error);
}); 
//#endregion

console.log("------------------------------------------------------------------------------------------------------------------------")


module.exports = {
    Register,
    Affirmation,
    Journal
}
