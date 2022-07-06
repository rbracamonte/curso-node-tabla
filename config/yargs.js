const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Toma la Base para la tabla de multiplicac1ón'
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        default: 10,
        // demandOption: true,
        describe: 'Hasta que número se va a multiplicar'
    })
    .check( (argv,options) => {
        if( isNaN( argv.b ) ){
            throw 'La base tiene que ser un número'
        }
        return true
    })
    .argv;

module.exports = argv;