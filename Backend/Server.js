const express = require('express')
const dotenv = require("dotenv")
const colors = require('colors')
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./Routes/UserRoutes')
const connectDB  = require('./db/dbConnect')
dotenv.config()

const app = express()

app.use(cors(
    {
        origin:["http://localhost:3000","https://hubnex-assignment-hosting-client.vercel.app/"],
        methods:["POST","GET"],
        allowedHeaders: 'Content-Type,Authorization',
        credentials:true
    }
))

connectDB()

app.use(express.json())



const PORT = process.env.PORT || 5000

app.get('/', (req, res) =>{
    res.send("APP is running HUBNEX WALA ")
})

app.use('/api',userRoutes)

app.listen(PORT, ()=>{
    console.log(`Server is running localhost@${PORT}`.white.bold)
})