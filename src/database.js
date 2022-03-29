//Creamos nuestra base de datos

const mongoose = require('mongoose')

URI ='mongodb+srv://juanor2022:juanor2022@cluster0.zcdns.mongodb.net/Escuelita2022?retryWrites=true&w=majority'




mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,

})
.then (db => console.log('Base de datos conectado', db.connection.name)).catch(error => console.log(error))

module.exports= mongoose