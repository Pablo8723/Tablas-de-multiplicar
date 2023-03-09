const { argv } = require('./config/yargs');
const {crearArchivo} = require('./helpers/multiplicar');
const cl = require('colors');


//const base = 3;
console.clear();

//ESTO SE UTILIZA PARA CAPTURAR LAS VARIABLES DESDE LA CONSOLA
//============================================================
// const[,,arg3 = 'base=5'] = process.argv;
// const [, base = 1] = arg3.split('=');

// console.log(process.argv);
//ASI SE TRABAJA CON LA LIBRERIA YARGS
console.log(argv); 


crearArchivo(argv.b, argv.l, argv.m)
    .then( nombreArchivo => console.log(`${nombreArchivo} creado`.rainbow.bgWhite))
    .catch( err => console.log(err))


