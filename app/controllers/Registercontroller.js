const model = require("../models/index")
const { Op } = require("sequelize")
//const Controller = {}


const Registrationflow = async (req,res) =>{
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
}

const createUser = async (req,res) =>{
    try{
        console.log()
        const checkData = await model.Register.findAll({
            where :{
                [Op.or]:{
                    emailAddress : req.body.emailAddress,
                },
            },
        });
        console.log(checkData.length);
        if(checkData.length > 0){
            res.status(500).json({
                message : "Email Address  has already in use"
            });
        }
        else{

            
            const userData = await model.Register.create({
                emailAddress:req.body.emailAddress,
                password:req.body.password,
                confirmPassword:req.body.confirmPassword,
                token:req.body.emailAddress + req.body.confirmPassword,
            }).the((result) =>{
                res.status(201).json({
                    message : "User Successfully Created",
                    data:{
                        emailAddress:req.body.emailAddress,
                        password:req.body.password,
                        confirmPassword:req.body.confirmPassword,
                        token:req.body.emailAddress + req.body.confirmPassword
                    }
                });
            });
        }
    }catch(error){
        console.log(error)
        res.status(404).json({message:error})
    }
}


module.exports = {
    Registrationflow,
    createUser
};