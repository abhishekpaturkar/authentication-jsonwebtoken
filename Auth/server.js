const express = require("express");
const app = express();
const port = 3000;
const {User, connectMongoose} = require("./db/db")
// const ejs = require("ejs");
const router = require("./router/router")
 

connectMongoose();

app.use(express.json());
app.use(express.urlencoded({ extended : true }));


app.set("view engine", "ejs");

app.use("/app", router)

app.listen(port, ()=> {
    console.log(`Server is running on Port ${port}`);
})
