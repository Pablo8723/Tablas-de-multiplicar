const argv = require('yargs')
                    .option('b',{
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'Es la base de la tabla de multiplicar'
                    })
                    .option('l',{
                        alias: 'listar',
                        type: 'boolean',
                        default: false,
                        describe: 'Muestra la tabla en consola'
                    })
                    .option('m',{
                        alias: 'matriz',
                        type: 'number',
                        default: 10,
                        describe: 'Muestra la longitud de las multiplicaciones'
                    })
                    .check( (argv, option) => {
                        if(isNaN(argv.b)){
                            throw 'La base debe ser un número'
                        }
                        return true;
                    })
                    .argv;

module.exports={
    argv
}