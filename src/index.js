// Requerimos las dependencias necesarias
const express = require('express')
const app = express()
const morgan = require('morgan')
const dotenv = require('dotenv'); 
const cors = require('cors')
const bodyparser = require('body-parser')
require('./database')


dotenv.config();
//Configuracion del puerto

app.set('Port',process.env.PORT || 5000);
app.use(morgan('dev'));
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use(cors({origen: '*'}));

//routes
app.use("/escuela", require("./routes/EscuelaRoutes"));
app.use("/curso", require("./routes/CursoRoutes"));

app.listen(app.get('Port'),()=>{
  console.log('Servidor escuchando por el puerto',app.get('Port'))
 })
 