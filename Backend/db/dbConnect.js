const mongoose = require('mongoose')
const colors = require('colors')

const connectDB =  async() => {
    try
    {
        const conn = await mongoose.connect(process.env.MONGO_SECRET_URL)
        console.log(`MongoDb Connected !!`.cyan.bold)
    }
    catch(error)
    {
        console.log(` Error !! ${error.message}`);
        process.exit();
    }
}

module.exports = connectDB