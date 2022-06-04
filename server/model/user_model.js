// const { timeStamp } = require('console');
const mongoose = require('mongoose');
const userinfo_model = new mongoose.Schema({

     name: {
        type: String
    },
   // time : { type : Date, default: Date.now },
   email: {
    type: String
    },  
 
    created_at: {
        type: Date
    },
 
    updated_at: {
        type: Date
    },  
 
  
});


const userinfo_model_info= mongoose.model('userinfo', userinfo_model);
module.exports = userinfo_model_info ;