
const { crearArchivo } = require ('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');

console.clear();
    
crearArchivo( argv.base, argv.l, argv.h )
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, `creado`.bgGreen.white)) 
    .catch((err) => console.log(err.red));
