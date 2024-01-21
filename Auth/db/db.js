const mongoose = require("mongoose");

exports.connectMongoose = () => {
    mongoose
      .connect("MongoDBURL")
      .then((e) => console.log(`Conneccted to mongoDB: ${e.connection.host}`))
      .catch((e) => console.log(e));
}; 



const user = new mongoose.Schema( {
    username : {
        type: String,
        required : true,
        unique : true
    },   
    password : String,
})


exports.User = mongoose.model("User", user);