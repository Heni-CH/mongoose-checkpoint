const mongoose = require("mongoose");

const {Schema} = mongoose;

const PersonSchema = new Schema({
    name: {type: String, required:true},
    age: Number,
    favoriteFood: [String]

})

const Person = mongoose.model("person", PersonSchema);
module.exports = Person;