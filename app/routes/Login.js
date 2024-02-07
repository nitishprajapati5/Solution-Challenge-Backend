const express = require('express');
const router = express.Router();
const Model = require("../models/index");
const { Op } = require('sequelize');


router.post('/LoginByIdandPassword',async(req,res,next)=> {
    try{
        const emailAddress = req.body.data.emailAddress;
        const password = req.body.data.password;

        const userData = await Model.Register.findOne({
            attributes:{
                exclude:["emailAddress","password","confirmPassword","createdAt","updatedAt"]
            },
            where:{
                [Op.and] : [
                    {
                        emailAddress:emailAddress
                    },
                    {
                        password : password
                    }
                ]
                
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

router.post("/tokenbasedLogin",async (req,res)=>{
    try{
        const token = req.body.data.token;
        const data = await Model.Register.findOne({
            attributes : {
                exclude : ["createdAt","updatedAt","password","confirmPassword"]
            },
            where:{
                token : token,
            }
        });

        res.status(200).json({
            statusCode:200,
            statusMessage:"SUCCESS",
            data:data
        });


    }
    catch(error){
        res.status(400).json({
            statusCode:400,
            statusMessage:"FAILURE",
            Messsage:error
        })
    }
})
module.exports = router;

