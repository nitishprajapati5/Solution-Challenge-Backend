const express = require('express');
const router = express.Router();
const Model = require("../models/index")


router.get('/LoginByIdandPassword',async(req,res,next)=> {
    try{
        const emailAddress = req.body.emailAddress;
        const password = req.body.password;

        const userData = await Model.Register.findOne({
            attributes:{
                exclude:["emailAddress","password","confirmPassword","createdAt","updatedAt"]
            },
            where:{
                emailAddress:emailAddress
            }
        })

        if(!userData || userData === null || userData.length === 0){
            res.status(400).json({
                message: "User Data is Not Present",
                MessageCode: "BADREQUEST",
                statusCode: 400
            });
        }  
        else{
            res.status(200).json({
                message: "User Fetched Successfully",
                MessageCode: "SUCCESS",
                statusCode: 200,
                data:userData
            });
        }      
        

    }
    catch(error){
        res.status(200).json({
            message: error,
            MessageCode: "FAILURE",
            statusCode: 404,
            
        });
    }
})

module.exports = router;

