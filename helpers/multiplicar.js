const fs = require('fs');
const cl = require('colors');

const crearArchivo = async( base, listar, matriz ) => {
    try {
        let salida = '';
        let consola = '';
        for (let i = 1; i <= matriz; i++) {
            salida += `${base} * ${i} = ${base * i}\n`;
            consola += `${base} ${'*'.red} ${i} ${'='.red} ${base * i}\n`;
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
        if(listar){
            console.log('================'.cyan);
            console.log('tabla del: ', cl.white(base).bgRed);
            console.log('================'.cyan);
            
            console.log(consola);
        }

        return `Tabla del ${base},`;
    } catch (error) {
        throw error
    }
    
}

module.exports = {
    crearArchivo
}

