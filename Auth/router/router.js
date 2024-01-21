const {Router} = require("express")
const router = Router();
const {KEY} = require("../config")
const {User} = require("../db/db");
const userAuth = require("../middleware/auth")
const jwt = require("jsonwebtoken")

router.get("/register", (req, res) => {
    res.render("register")
})

router.post("/register", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const newUser = await User.create({
        username : username,
        password : password
    })
    if(newUser) {
        res.status(200).render("login")
    }
    else {
        res.status(400).json({
            msg : "Error"
        })
    }
})

router.get("/login", (req,res) => {
    res.render("login")
})

router.post("/login", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const isUser = User.findOne({username, password})
    if(isUser){
        const token = jwt.sign({username}, KEY);
        console.log(token)
        res.append("authenticate", token).render('index');
    }
})

router.get("/index", userAuth, (req,res) => {
    res.render("index")
})


module.exports = router;