const GetMoodTracker = (req,res) =>{
    try{
        const data = [1,2,3,4,5,6,7,8,9,10]
        res.status(200).json({
            Message : "Hello from Dashboard",
            data
        })
    }
    catch(error){
        console.log(400)
        res.status(400).json({
            Message : error
        })
    }
}



module.exports = {
    GetMoodTracker
};
