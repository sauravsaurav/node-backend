const express = require("express");
var format = require('date-format');

const app = express();

const PORT = process.env.PORT || 4000  ;





app.get("/",(req,res)=>{
    res.status(200).send("<h1>Hello World</h1>");
});


app.get("/api/v1/instagram",(req , res)=>{
    const instaSocial = {
        username : "sauravkumar411",
        followers : 66,
        follow : 70,
        date : format.asString('hh:mm:ss.SSS', new Date())
    };

    return res.status(200).json(instaSocial)
});


app.get("/api/v1/facebook",(req , res)=>{
    const instaSocial = {
        username : "saurav3",
        followers : 60,
        follow : 75,
        date : format.asString('hh:mm:ss.SSS', new Date())
    };

    return res.status(200).json(instaSocial)
});

app.get("/api/v1/linkdin",(req , res)=>{
    const instaSocial = {
        username : "sauravKumar",
        followers : 88,
        follow : 90,
        date : format.asString('hh:mm:ss.SSS', new Date())
    }; 

    return res.status(200).json(instaSocial)
});

app.get("/api/v1/:token",(req, res)=>{
    console.log(req.params.token);
    res.status(200).json({param : req.params.token});
})


app.listen(PORT, ()=>{
    console.log(`Server is running at ${PORT}`);
})