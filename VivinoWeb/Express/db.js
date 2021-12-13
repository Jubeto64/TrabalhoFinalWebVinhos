var mongoose = require('mongoose'); 
const URI = `mongodb+srv://mongodbUser:admin123@vivinoprojetowebdb.4a2c0.mongodb.net/VivinoDB?retryWrites=true&w=majority`;
    
const connectDB = ()=>{
    mongoose.connect(URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log("DB connected...");
}

var userSchema = new mongoose.Schema(
    {
        Usuario: String,
        Email: String,
        Senha: String
    },
    {
        collection: 'user',
        versionKey: false
    }
);

var vinhoSchema = new mongoose.Schema(
    {
        Vinicola: String,
        Nome: String,
        PaisOrigem: String,
        Tipo: String,
        TipoUva: String,
        Harmonizacao: String,
        Rotulo: String
    },
    {
        collection: "vinho",
        versionKey: false
    }
);


module.exports = { 
    Mongoose: mongoose,
    UserSchema: userSchema,
    VinhoSchema: vinhoSchema,
    connectDB
}