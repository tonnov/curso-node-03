

const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

// console.log(argv);
// console.log('base: yargs', argv.base)

// const [ , , arg3 = 'base=2' ] = process.argv
// const [ , base = 2 ] = arg3.split('=')
// console.log(base)


// let base = 7;

crearArchivo(argv.base, argv.listar)
    .then(msg => console.log(`${msg} creado`))
    .catch(err => console.log(err))
