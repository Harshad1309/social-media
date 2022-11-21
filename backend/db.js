import mongoose from "mongoose";

mongoose.connect( "mongodb+srv://codewithharshad:BillMost56@harshadsonagara.cbbdi.mongodb.net/?retryWrites=true&w=majority", { 
    useUnifiedTopology: true}, (err) => {
    if(!err){
        console.log("database connected successfully");
    }else{
        console.log("error in database connection "+err);
    }
})

//  module.exports  = mongoose;  
 export default mongoose;