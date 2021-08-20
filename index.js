const express = require("express");
const app = express();
const connection = require("./database/database");

connection.authenticate().then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

app.get('/' , (req , res)=>{

   res.send('hello from simple server :)');

});

app.listen(80, () => {
    console.log("Server is Running!");
});