const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name : "iphone",
    price  :165,
    featured : false,
    rating : 4.8,
    createdAt : "2022--11-17",
    company  :"apple",
});


module.exports = mongoose.model("Product", productSchema) ; 

