const express = require('express');
const dbconnect = require('./config');
const ModelUser = require('./userModel');

const app = express();
const router =  express.Router();

router.post("/", async (req,res)=>{
    const body = req.body;
    const respuesta = await ModelUser.create(body)
    res.send(respuesta)
})

router.get("/", async (req,res)=>{
    const respuesta = await ModelUser.find({})
    res.send(respuesta);
})

app.use(express.json())
app.use(router)
app.listen(3000, () =>{
    console.log("El servidor esta en el puerto 3000");
})

dbconnect();