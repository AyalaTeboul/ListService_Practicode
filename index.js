

// import express from 'express'
const express = require("express");
const sdk = require('api')('@render-api/v1.0#dnrc1ulf088q9j');
sdk.auth('rnd_uqfQn1iYWw1GDl5J5ZeROHxUSkVH');

const app = express();
const port = 3000;

app.get('/', (req, res) => {

   
    sdk.getServices({limit: '20'})
      .then(({ data }) => res.send(data))
      .catch(err => res.send(err));
})
app.listen(port,()=>{console.log("app is running in port 3000");})

