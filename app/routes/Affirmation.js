const express = require('express');
const router = express.Router();
const { Op } = require("sequelize")
const Model = require("../models/index")
/*This Route is Used for Creating an Affirmation with it's type and with the Notes */
router.get("/CreateAffirmation",async (req,res,next) =>{

    try{
        const token = req.body.token;

        const checkToken = await Model.Register.findOne({
            where:
            {
                token
            }
        });

        if(checkToken.length == 0 && checkToken.length >= 2){
            return res.status(400).json({
                message:"Token is Invalid",
                MessageCode:"BADREQUEST",
                statusCode:400
            })
        }
        else{          
            const result = await Model.Affirmation.create({
                AffirmationType: req.body.data.AffirmationType,
                AffirmationNotes: req.body.data.AffirmationNotes
            });
            
            res.status(201).json({
                message: "Affirmation Created Successfully",
                MessageCode: "SUCCESS",
                StatusCode:201
            });
        }
    }   
    catch(error){
            console.log(error)
            res.status(404).json({
                message:error,
                MessageCode:"FAILURE",
                StatusCode:404
            })
    }
})

/* This Route is Used for Getting all the Affirmations */
router.get("/GetAllAffirmation",async (req,res,next)=>{
    try{

        const userData = await Model.Affirmation.findAll({
            attributes:{
                exclude:["createdAt","updatedAt"]
            },
            where:{
                AffirmationNotes:{
                    [Op.not] : null
                }
            }
        })

        res.status(200).json({
            data:userData
        })
    }
    catch(error){
        res.status(404).json({
            message:error,
            MessageCode:"FAILURE",
            StatusCode:404
        })
    }
})

/* This Route is Used for Getting Random Affirmation */
router.get("/GetRandomAffirmation", async (req, res, next) => {
    try {
    const token = req.body.token;

    const checkToken = await Model.Register.findOne({
        where: {
        token
        }
    });

    if (checkToken.length == 0 && checkToken.length >= 2) {
        res.status(400).json({
        message: "Token is Invalid",
        MessageCode: "BADREQUEST",
        statusCode: 400
        });
    } else {
        // Get Count of Affirmation in the Database
        const countAffirmation = await Model.Affirmation.findAll({
        attributes: {
            exclude: ["createdAt", "updatedAt"]
        },
        where: {
            AffirmationNotes: {
            [Op.not]: null
            }
        }
        });

        const totalAffirmationCount = countAffirmation.length;

        // Get Random Number in the From the List
        const min = 1;
        const randomNumber =
          Math.floor(Math.random() * (totalAffirmationCount - min + 1)) + min;

        const filterId = randomNumber;

        const userData = await Model.Affirmation.findOne({
        attributes: {
            exclude: ["createdAt", "updatedAt"]
        },
        where: {
            Id: filterId
        }
        });
        res.status(200).json({
        message: "Affirmation Fetch Successfully",
        MessageCode: "Ok",
        statusCode: 200,
        data: userData
        });
    }
    } catch (error) {
      //console.log(error);
    res.status(400).json({
        message: "Token is Invalid",
        MessageCode: "BADREQUEST",
        statusCode: 400
    });
    }
});

module.exports = router;