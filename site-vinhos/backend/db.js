const mongoose = require('mongoose');

const URI = "mongodb+srv://mongodbUser:admin123@vivinoprojetowebdb.4a2c0.mongodb.net/VivinoDB";

const connectDB = async()=>{
    await mongoose.connect(URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log("DB connected...");
}

module.exports = connectDB;