import connectDB from "./db/db.js";

connectDB()
.then((succ)=>{
    console.log("Connection Successful")
})
.catch((err)=>{
    console.log(`Mongo_db connection failed ${err}`)
})



