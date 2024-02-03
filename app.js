const express = require('express')
const app = express();
const sequelize = require("../Backend/app/config/database")
app.use(express.json());
//#region 
const sequelize = new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,{
    host:dbConfig.HOST,
    dialect:dbConfig.dialect
});
try{
    sequelize.authenticate();
    console.log("Connection has been established Successfully");
}catch(error){
    console.error("Unable to Connect to database:",error)
}
//#endregion
/* DB Area */

//const db = require("./app/models");
//db.sequelize.sync();

/*
db.sequelize.sync({force : true}).then() =>{
    console.log("Drop and Re-Sync Db.")
}
*/
/* Routes Area */
const productRoutes = require('../Backend/app/routes/products');
const LoginRoutes = require('../Backend/app/routes/Login');
const RegisterRoutes = require('../Backend/app/routes/Register');
const DashboardRoutes = require("../Backend/app/routes/dashboard")
const AffirmationRoutes = require("../Backend/app/routes/Affirmation")
const JournalRoutes = require("../Backend/app/routes/Journal")
/* Routing Area */
app.use('/products',productRoutes);
app.use('/Register',RegisterRoutes);
app.use('/Login',LoginRoutes);
app.use('/Dashboard',DashboardRoutes)
app.use('/Affirmations',AffirmationRoutes)
app.use('/Journal',JournalRoutes)

// sequelize.sync({alter:true})
//     .then((result) =>{
//         //console.log(result)
//     })
//     .catch((err) => {
//         console.log(err)
//     })

/*app.use((req,res,next) =>{
    res.status(200).json({
        message : "Server up and Running"
    });
})
*/
module.exports = app;