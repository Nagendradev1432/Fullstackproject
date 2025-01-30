const mongoose = require('mongoose');
// import mongoose from "mongoose"
mongoose.connect('mongodb+srv://nagendramejari:nagendramejari@cluster0.wwdqb.mongodb.net/Quizz')
  .then(() => console.log('Connected!')).catch((err)=>{
    console.log(err,"error")
  })