// Requiere módulo incorporado
const fs = require('fs');
  
// Función asíncrona
fs.readFile('datos.json', 'utf8', function (err,datos) {
  if (err) {
    return console.log(err);
  }
  console.log("A continuación se muestran los datos de la llamada a la función asíncrona")
  console.log(datos);
});
  
// Función síncrona
const datos = fs.readFileSync('datos.json','utf8');
console.log("A continuación se muestran los datos de la llamada a la función síncrona")
console.log(datos);