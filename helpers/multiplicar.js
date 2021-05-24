
const fs = require('fs');

// const crearArchivo = async ( base = 5) => {
//     let salida = '';
//     return new Promise((resolve, reject) => {
//         salida += `================= \n  Tabla del ${base}  \n=================\n`;
    
//         for (let y = 1; y <= 10; y++) {
//             salida += `${base} x ${y} = ${base*y}\n`;
//         }
//         // console.log(salida);
    
//         fs.writeFileSync(`tabla-${base}.txt`, salida);
    
//         resolve(`tabla-${base}.txt`);
//     })
// }

const crearArchivo = async ( base = 5, listar = false) => {
    try {

        let salida = '';
    
        salida += `================= \n  Tabla del ${base}  \n=================\n`;
    
        for (let y = 1; y <= 10; y++) {
            salida += `${base} x ${y} = ${base*y}\n`;
        }
    
        (listar) ? console.log(salida) : '';
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
        return `tabla-${base}.txt`;

    } catch (error) {
        throw error;
    }
}

module.exports = { 
    crearArchivo
}