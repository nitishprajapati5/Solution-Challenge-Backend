/*Status Codes*/
module.exports= {
    //#region For Force Command of the Data Tables
    FORCE_SYNC_REGISTER : false,
    FORCE_SYNC_JOURNAL : false, 
    FORCE_SYNC_AFFIRMATIONS : false,
    FORCE_SYNC_QUOTE:false,
    //#endregion

    //#region For Alter Command of the Data Tables
    ALTER_REGISTER : false,
    ALTER_JOURNAL : false,
    ALTER_AFFIRMATIONS : false,
    ALTER_QUOTE:false,
    //#endregion

    //#region Danger Region for Dropping all Flag Be Super Alert while doing this Operation
    DROP_ALL_TABLES : true
    //#endregion

}