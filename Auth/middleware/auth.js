// const {user} = require("../db/db");
const jwt = require("jsonwebtoken");
const {KEY} = require("../config")


function userAuth (req, res, next) {
    try {
        const token = req.headers.authentication;
        const verify = jwt.verify(token, KEY);
        if(verify.username) {
            next();
        }
        else {
            res.status(400).json({
                msg : "User is not authenticate"
            })
        }    
    } catch (error) {
        res.status(400).json({
            msg : "Error in authentication"
        })
    }
    
}

module.exports = userAuth;

