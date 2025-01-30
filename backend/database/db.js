const mongoose = require('mongoose');
// import mongoose from "mongoose"
mongoose.connect('mongodb://localhost:27017/Quizz')
  .then(() => console.log('Connected!')).catch((err)=>{
    console.log(err,"error")
  })