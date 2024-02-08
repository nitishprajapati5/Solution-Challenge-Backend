const model = require("../models/index")
const express = require('express');
const router = express.Router();
const { Op } = require("sequelize")
const { v4: uuidv4 } = require('uuid');
/*router.get('/',(req,res,next) =>{
    res.status(200).json({
        message : "Hi from Register Page"
    });
});
*/


router.get("/",async (res,req,next)=>{
    try{
        const userData = await model.Register.findAll();
        if(userData.length > 0){
            res.status(200).json({
                count : userData.length
            });
        }
        else{
            res.status(200).json({
                count : 0
            });
        }
    }
    catch(error){
        res.status(404).json({
            message : error
        })
    }
})
router.post("/create",async (req,res,next) => {
    try{
        console.log()
        const uuid = uuidv4();
        const checkData = await model.Register.findAll({
            where :{
                [Op.or]:{
                    emailAddress : req.body.data.emailAddress,
                },
            },
        });
        console.log(checkData.length);
        if(checkData.length > 0){
            res.status(409).json({
                message : "Email Address  has already in use",
                status:409,
                statusMessage:"DUPLICATE"
            });
        }
        else{

            const tokenUUID = uuid;

            const userData = await model.Register.create({
                emailAddress:req.body.data.emailAddress,
                password:req.body.data.password,
                confirmPassword:req.body.data.confirmPassword,
                token:tokenUUID,
                Name:req.body.data.Name
            }).then((result) =>{
                res.status(201).json({
                    Message : "User Successfully Created",
                    MessageCode : "SUCCESS",
                    statusCode:201,
                    data:{
                        emailAddress:req.body.data.emailAddress,
                        password:req.body.data.password,
                        confirmPassword:req.body.data.confirmPassword,
                        token:tokenUUID,
                        Name:req.body.data.Name
                    }
                });
            });
        }
    }catch(error){
        console.log(error)
        res.status(404).json({message:error})
    }
})


module.exports = router;