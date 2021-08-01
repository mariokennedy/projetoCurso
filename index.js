const express = require("express");
const app = express();


app.get('/' , (req , res)=>{

   res.send('hello from simple server :)')

});

app.listen(80, () => {
    console.log("Server is Running!");
});