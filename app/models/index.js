require("dotenv").config()
const Register = require("./Register.js");
const Affirmation = require("./Affirmation.js");
const Journal = require("./Journal.js")
const Quote = require("./Quote.js")

//All The Models here should be Register as it is
//Any Module Declared here will be Added and Path will be Give as it is
module.exports = {
    Register,
    Affirmation,
    Journal,
    Quote
}
