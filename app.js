
const { crearArchivo } = require ('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');

console.clear();

// console.log(process.argv);
// console.log(argv);

// console.log('base: yargs', argv.base, argv.l);

// const [,,arg3 = 'base=5'] = process.argv
// console.log(arg3);

// const [, base = 5] = arg3.split('=');
// console.log( base );

//tabla de multiplicar
// const base = 6;
// const numeroFinal=12;

    
crearArchivo( argv.base, argv.l, argv.h )
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, `creado`.bgGreen.white)) 
    .catch((err) => console.log(err.red));
    
// fs.writeFile('tabla-19.txt', salida, (err)=>{
//     if (err) throw err;
//     console.log('Archivo tabla-19.txt guarado');
// });