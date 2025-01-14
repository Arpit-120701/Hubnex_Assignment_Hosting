const express = require('express')
const mongoose =  require('mongoose')
const dotenv = require("dotenv")
const colors = require('colors')
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./Routes/UserRoutes')
const connectDB  = require('./db/dbConnect')

const app = express()

app.use(cors(
    {
        origin: ['http://localhost:3000'], // Your frontend URL
        methods: ['GET', 'POST'], // Allowed HTTP methods
        credentials: true, // Include cookies
    }
));

app.use(express.json())
app.use(express.static('public'));


const PORT = process.env.PORT || 5000

app.get('/', (req, res) =>{
    res.send("APP is running HUBNEX WALA ")
})

app.use('/api',userRoutes)

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running localhost@${PORT}`.white.bold);
    });
  })
  .catch((error) => {
    console.error(`Failed to connect to MongoDB: ${error.message}`);
    process.exit(1);
  });


module.exports = app;
