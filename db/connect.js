const mongoose = require("mongoose");

uri = "Testing data base run ";

const connectDB = () => {

    return mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology : true,
    });

};

module.exports = connectDB;