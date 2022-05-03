const express=require('express')
const app =express()
const dotenv=require("dotenv")
const mongoose=require("mongoose")
const productrouter=require("./routes/product")

dotenv.config()

//database connection using mongoose

mongoose.connect(
    process.env.DB_CONNECT,
    { useUnifiedTopology: true, useNewUrlParser: true },
    () => console.log("connected to db")
  );

//built in express middleware 

app.use(express.json())


//creating middleware routes

app.use('/',productrouter)


app.listen(8000,()=>{
    console.log("connected port 8000")
})

