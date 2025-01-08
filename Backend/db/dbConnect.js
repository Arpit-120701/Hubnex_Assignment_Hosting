const mongoose = require('mongoose')
const colors = require('colors')

const connectDB =  async() => {
    try
    {
        const conn = await mongoose.connect("mongodb+srv://arpit99sangamnerkar:hubnexlabs@cluster0.2jubf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log(`MongoDb Connected !!`.magenta.bold)
    }
    catch(error)
    {
        console.log(` Error !! ${error.message}`);
        process.exit();
    }
}

module.exports = connectDB