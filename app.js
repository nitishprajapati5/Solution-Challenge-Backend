const express = require('express');
const cors = require('cors');
const app = express();
const sequelize = require("./app/config/database")
app.use(express.json());
app.use(cors());
//#region 
// const sequelize = new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,{
//     host:dbConfig.HOST,
//     dialect:dbConfig.dialect
// });
// try{
//     sequelize.authenticate();
//     console.log("Connection has been established Successfully");
// }catch(error){
//     console.error("Unable to Connect to database:",error)
// }
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
const productRoutes = require('./app/routes/products');
const LoginRoutes = require('./app/routes/Login');
const RegisterRoutes = require('./app/routes/Register');
const DashboardRoutes = require("./app/routes/dashboard")
const AffirmationRoutes = require("./app/routes/Affirmation")
const JournalRoutes = require("./app/routes/Journal")
const QuotesRoutes = require('./app/routes/Quote')
/* Routing Area */
app.use('/products',productRoutes);
app.use('/Register',RegisterRoutes);
app.use('/Login',LoginRoutes);
app.use('/Dashboard',DashboardRoutes)
app.use('/Affirmations',AffirmationRoutes)
app.use('/Journal',JournalRoutes)
app.use('/Quote',QuotesRoutes)
// sequelize.sync({alter:true})
//     .then((result) =>{
//         //console.log(result)
//     })
//     .catch((err) => {
//         console.log(err)
//     })

app.use((req,res,next) =>{
    try{
        res.status(200).json({
            message : "Server up and Running"
        });
    }
    catch(error){
        res.status(200).json({
            message:error
        });
    }
    
})

module.exports = app;