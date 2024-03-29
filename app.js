const express= require('express');
const app= express();
const path= require('path');

app.listen(3030,()=>
console.log("Servidor encendido")
);

app.use(express.static('public'));

app.get("/home",(req,res)=>
res.sendFile(path.join(__dirname,"./views/index.html"))
);

app.get("/turing",(req,res)=>
res.sendFile(path.join(__dirname,"./views/turing.html"))
);

app.get("/lovelace",(req,res)=>
res.sendFile(path.join(__dirname,"./views/lovelace.html"))
);

app.get("/hopper",(req,res)=>
res.sendFile(path.join(__dirname,"./views/hopper.html"))
);

app.get("/hamilton",(req,res)=>
res.sendFile(path.join(__dirname,"./views/hamilton.html"))
);

app.get("/clarke",(req,res)=>
res.sendFile(path.join(__dirname,"./views/clarke.html"))
);

app.get("/berners-lee",(req,res)=>
res.sendFile(path.join(__dirname,"./views/berners-lee.html"))
);

app.get("/babbage",(req,res)=>
res.sendFile(path.join(__dirname,"./views/babbage.html"))
);