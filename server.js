const express = require("express");
const connectDB = require("./DB/connectDB");
const queries = require("./Queries/queries");

/* queries */
queries.createManyPerson();
queries.createSavePerson();
queries.newUpdatePerson();
queries.chainSearch();
queries.removeMany();
queries.removePerson();
queries.search();
queries.searchByFood();
queries.searchById();
queries.updatePerson();

connectDB();

const app = express();

const PORT = 4000;

app.listen(PORT,(err) =>{
    err ? console.log(err): console.log(`Server is running on ${PORT}`) ;
});