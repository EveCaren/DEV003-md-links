
//const colors = require('colors');
//const { mdLinks } = require('./mdLink.js');
//const funtionsCli = require('./cliFunctions.js');
const path = process.argv[2];// módulo: permite capturar argumnts a través de comandos

const validate = process.argv.includes('--validate') || option.includes('--v');
const stats = process.argv.includes('--stats') || option.includes('--s');
const help = process.argv.includes('--help') || option.includes('--h');


if(help) {
    console.log('');
    console.log('')
}

