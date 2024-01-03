const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/abhishekdynamic")
.then(() => {
    console.log("Connection successful");
}).catch((error) => {
    console.log(error);
});