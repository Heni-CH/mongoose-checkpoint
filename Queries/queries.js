const Person = require("../Model/model");

// create a record model:
let heni = new Person({
    name:"Heni",
    age: 31,
    favoriteFood: ["Pizza", "Pasta", "Ojja"],
});

const createSavePerson = async() => {
    try {
        await heni.save();
    } catch (error) {
        console.log("error",(error))
    }
};

//Create Many Records with model.create()

let arrayOfPerson = [
    {
        name:"Marwen",
        age: 34,
        favoriteFood: ["Couscous", "Pasta", "Mloukhia"], 
    },

    {
        name:"Rayen",
        age: 26,
        favoriteFood: ["Tacos", "Makloub", "Fish"], 
    },

    {
        name:"Dali",
        age: 30,
        favoriteFood: ["Pie", "Pasta"], 
    },

    {
        name:"Taher",
        age: 29,
        favoriteFood: ["Burrito"], 
    },
];

const createManyPerson = async() =>{
    try {
        await Person.create(arrayOfPerson);
    } catch (error) {
        console.log("error",(error));
    }
};

//Use model.find() to Search Your Database

const search = async(searchByName) =>{
    try {
        const data = await Person.find({ name: `${searchByName}`});
        console.log(data);
    } catch (error) {
        console.log("error", (error));
        
    }
};

//Use model.findOne() to Return a Single Matching Document from Your Database

const searchByFood = async(searchByFood) => {
    try {
        const data = await Person.findOne({
            favoriteFood: { $all: [`${searchByFood}`]},
        });
        console.log(data);
    } catch (error) {
        console.log("error", (error));
    }
};

//Use model.findById() to Search Your Database By _id

const searchById = async(searchById) => {
    try {
        const data = await Person.findById(`${searchById}`);
        console.log(data);
    } catch (error) {
        console.log("error",(error));
    }
};

//Perform Classic Updates by Running Find, Edit, then Save

const updatePerson = async(personId) =>{
    try {
        const data = await Person.findById(`${personId}`);
        data.favoriteFood.push("Waffle");
        data.save();
        console.log(data)
    } catch (error) {
        console.log("error",(error))
    }
};

//Perform New Updates on a Document Using model.findOneAndUpdate()

const newUpdatePerson = async(personName) => {
    try {
    const data = await Person.findOneAndUpdate({name:`${personName}`}, {age:25}, {new:true});
    console.log(data);
} catch (error){
    console.log("error",(error))
}
};

//Delete One Document Using model.findByIdAndRemove

const removePerson = async(personId) =>{
    try {
        const data = await Person.findByIdAndRemove(`${personId}`);
        console.log(data)
    } catch (error) {
        console.log("error",(error))
    }
};

//MongoDB and Mongoose - Delete Many Documents with model.remove()

const removeMany = async(personName) => {
    try {
        const data = await Person.remove({name: `${personName}`});
        console.log(data);
    } catch (error) {
        console.log("error",(error))
    }
};

//Chain Search Query Helpers to Narrow Search Results

const chainSearch = async()=> {
    try {
        const data = await Person.find({favoriteFood: { $all: ["Pizza"] } });
        
        console.log(data);
    } catch (error) {
        console.log("error",(error))
    }
};

module.exports= {
    createSavePerson,
    createManyPerson,
    search,
    searchByFood,
    searchById,
    updatePerson,
    newUpdatePerson,
    removeMany,
    removePerson,
    chainSearch,
};
