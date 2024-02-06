const {DataTypes} = require("sequelize")
const db = require("../config/database")
const constants = require("../config/Constants.js")

const Quote = db.define("Quotes",{
    id:{
        type:DataTypes.BIGINT,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    quotesType:{
        type:DataTypes.STRING,
        allowNull:true
    },
    quotesDesc:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{
    freezeTablename:true,
    tablename:"Quote",
    timestamps: true, // Ensure this line is present to enable createdAt and updatedAt
    underscored: false,
})

/* Area for Syncing the Force and Alter Flag */
//#region 
Quote.sync({alter:constants.ALTER_QUOTE})
.then(() =>{
    console.log("Quote Table synced successfully with Force flag set as "+ constants.ALTER_QUOTE)
}).catch((error) => {
    console.error("Error Syncing Quote Table: ",error)
})


Quote.sync({
    force:constants.FORCE_SYNC_QUOTE
}).then(() =>{
    console.log("Quote table synced successfully with force flag set as " +constants.FORCE_SYNC_QUOTE)
}).catch((error) =>{
    console.log("Error Syncing Quote table: ",error);
})
//#endregion
module.exports = Quote;