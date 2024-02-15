const { sequelize, DataTypes} = require('sequelize')
const db = require("../config/database")
const constants = require("../config/Constants.js")

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
    },
    weight:{
        type:DataTypes.BIGINT,
        allowNull:true
    },
    age:{
        type:DataTypes.BIGINT,
        allowNull:true
    },
    gender:{
        type:DataTypes.STRING,
        allowNull:true
    }

},{
    freezeTableName:true,
    tablename:"Register"
}
)

/* Area for Syncing the Data tables with Alter Flags and Force Flag
 */
//#region 
Register.sync({alter:constants.ALTER_REGISTER})
.then(() => {
    console.log('Register table synced successfully with Register Changes with flag set as ' + constants.ALTER_REGISTER);
})
.catch((error) => {
    console.error('Error syncing Register table:', error);
});

Register.sync({force:constants.FORCE_SYNC_REGISTER})
.then(() => {
    console.log('Register table synced successfully with force change and flag set as ' + constants.FORCE_SYNC_REGISTER);
})
.catch((error) => {
    console.error('Error syncing Register table:', error);
});
//#endregion

module.exports = Register;