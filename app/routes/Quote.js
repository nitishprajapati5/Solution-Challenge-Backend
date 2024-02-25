const express = require('express')
const router = express.Router();
const {Op} = require('sequelize')
const Model = require('../models/index')


router.post("/createQuote",async(req,res,next) =>{
    try{

        const bulKData = req.body.data;
        console.log(bulKData)
        const insertData = await Model.Quote.bulkCreate(bulKData)
            .then((result) => {
                //console.log(result)
                res.status(200).json({
                    Message:"Bulk Inserted Successfully",
                    MessageCode:"SUCCESS",
                    statusCode:200
                })
            })
        }

    
    catch(error){
            console.log(error);
            res.status(400).json({
                Message: error,
                MessageCode: "ERROROCCURED",
                statusCode: 400
            })
    }
})

router.post("/getRandomQuotes", async (req, res, next) => {
    try {
        // const checkToken = await Model.Register.findOne({
        //     where: {
        //         token: req.body.data.token
        //     }
        // });

        // if (!checkToken || checkToken.length === 0 || checkToken.length >= 2) {
        //     return res.status(400).json({
        //         Message: "Invalid Token",
        //         MessageCode: "TOKEN_IS_INVALID",
        //         statusCode: 400
        //     });
        // }

        const countRecord = await Model.Quote.count();

        const min = 1;
        const randomIdGenerated = Math.floor(Math.random() * (countRecord - min + 1)) + min;

        const randomQuote = await Model.Quote.findOne({
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            },
            where: {
                id: randomIdGenerated,
                quotesDesc: {
                    [Op.not]: null
                }
            }
        });

        if (!randomQuote) {
            return res.status(404).json({
                Message: "No quotes found with the given criteria",
                MessageCode: "QUOTES_NOT_FOUND",
                statusCode: 404
            });
        }

        res.status(200).json({
            Message: "Random Quote Generated Successfully",
            MessageCode: "SUCCESS",
            statusCode: 200,
            data: randomQuote
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            Message: "Internal Server Error",
            MessageCode: "INTERNAL_SERVER_ERROR",
            statusCode: 500
        });
    }
});

module.exports = router;
