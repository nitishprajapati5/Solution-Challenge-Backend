const express = require('express');
const router = express.Router();
const Model = require("../models/index")


router.post("/CreateJournal",async (req,res,next)=>{
    try{
        const token = req.body.token;

        const checkToken = await Model.Register.findOne({
            where:{
                token
            }
        });

        if (!checkToken || checkToken.length === 0 || checkToken.length >= 2){
                res.status(400).json({
                Message: "Token is Invalid",
                MessageCode: "BADREQUEST",
                statusCode: 400
            });
        }
        else{
            const result = await Model.Journal.create({
                createdById:req.body.data.createdById,
                createdByName:req.body.data.createdByName,
                journalType:req.body.data.journalType,
                journalContent:req.body.data.journalContent,
                isDisabled:req.body.isDisabled
            });

            res.status(200).json({
                Message:"Journal Inserted Successfully",
                statusCode:200,
                statusMessage:"SUCCESS"
            })
        }
    }
    catch(error){
        console.log(error)
        res.status(404).json({
            Message:error,
            statusMessage:"FAILURE",
            statusCode:404
        })
    }
})

router.get("/GetAllJournal",async(req,res,next) => {  
    try{
        const JornalData = await Model.Journal.findAll({
            where:{
                isDisabled:false
            }
        })

        res.status(200).json({
            MessageCode:"SUCCESS",
            statusCode:200,
            data:JornalData
        })
    }
    catch(error){
        res.status(404).json({
        Message:error,
        MessageCode:"FAILURE",
        statusCode:404
        })
    }
})

router.post("/DeleteJournal",async(req,res,next) =>{
    try{
        const token = req.body.token;

        const checkToken = await Model.Register.findOne({
            where:{
                token
            }
        });

        if (!checkToken || checkToken.length === 0 || checkToken.length >= 2){
            res.status(400).json({
            Message: "Token is Invalid",
            MessageCode: "BADREQUEST",
            statusCode: 400
        });
        }else{
            const updateValues = {
                isDisabled: req.body.data.isDisabled,
            };

            const userData = await Model.Journal.update(updateValues,{
                where:{
                    id:req.body.data.id
                }
            })
            res.status(200).json({
                Message:"Journal Deleted Successfully",
                statusCode:200,
                MessageCode:"SUCCESS"
            })
        }


    }
    catch(error){
        res.status(404).json({
            Message:error,
            MessageCode:"FAILURE",
            statusCode:404
        })
    }
})
module.exports = router;