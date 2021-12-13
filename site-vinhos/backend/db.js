const mongoose = require('mongoose');

const URI = "mongodb+srv://mongodbUser:admin123@vivinoprojetowebdb.4a2c0.mongodb.net/VivinoDB?retryWrites=true&w=majority";

const connectDB = async () => {
    mongoose.connect(URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });
    console.log("Mongoose is connected!");
}

module.exports = connectDB;