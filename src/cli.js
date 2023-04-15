#!/usr/bin/env node
//const colors = require('colors');
// const { mdLinks } = require('..src/index.js');
// const funtionsCli = require('src/cliFunctions.js');
// const path = process.argv[2];// módulo: permite capturar argumnts a través de comandos

// const validate = process.argv.includes('--validate') || process.argv.includes('--v');
// const stats = process.argv.includes('--stats') || process.argv.includes('--s');
//const help = process.argv.includes('--help') || process.argv.includes('--h');

// if (help) {
//     console.log('\n=================================================================================================');
//     console.log('"mdLinks"'.bgGreen.black, 'es una libreria que te permite verificar el estado de los enlaces de archivos Markdown.');
//     console.log('=================================================================================================');
//     console.log(`\n${'>'.gray} USO: ${'md-links <path>'.blue} ${'[--validate] [--stats]'.yellow}`);
//     console.log(`\n${'>'.gray} OPCIONES:`);
//     console.log('');
//     console.log(`    Si corres ${'md-links <path>'.blue} ${'(ninguna opción)'.yellow}`);
//     console.log(`    ...........................................`.gray);
//     console.log(`
//             href    ${'>>'.gray}   URL encontrado.
//             text    ${'>>'.gray}   Texto que aparece en el link.
//             file    ${'>>'.gray}   Ruta donde se encuentra el archivo.`);
//     console.log('\n');
//     console.log(`    Si corres ${'md-links <path>'.blue} ${'--validate'.yellow}`);
//     console.log(`    ........................................`.gray);
//     console.log(`
//             href    ${'>>'.gray}   URL encontrado.
//             text    ${'>>'.gray}   Texto que aparece en el link.
//             file    ${'>>'.gray}   Ruta donde se encuentra el archivo.
//             status  ${'>>'.gray}   Código de status HTTP.
//             message ${'>>'.gray}   ${'"fail"'.red} mensaje en caso de falla, or ${'"ok"'.green} en caso de éxito.`);
//     console.log('\n');
//     console.log(`    Si corres ${'md-links <path>'.blue} ${'--stats'.yellow}`);
//     console.log('    .....................................'.gray);
//     console.log(`
//             Total    ${'>>'.gray}   Número total de links.
//             Unique   ${'>>'.gray}   Número de links únicos.`);
//     console.log('\n');
//     console.log(`    Si corres ${'md-links <path>'.blue} ${'--stats --validate'.yellow}`);
//     console.log('    ............................................'.gray);
//     console.log(`
//             Total    ${'>>'.gray}   Número total de links.
//             Unique   ${'>>'.gray}   Número de links únicos.
//             Broken   ${'>>'.gray}   Número de links rotos.`);
//     console.log('');
//     process.exit();
// };


// mdLinks(path, options)
//     .then((results) => {
//         if (stats && validate) {
//             console.log(`\n`);
//             console.log(`Estadísticas encontradas en ${path} :`);
//             console.log(`=================================================================================`.gray);
//             console.log('');
//             console.log(`   \n${'Total  : '.gray}     ${colors.green(cliFunctions.totalStats(results))}`);
//             console.log(`   \n${'Unique : '.gray}     ${colors.green(cliFunctions.uniqueStats(results))}`);
//             console.log(`   \n${'Broken : '.gray}     ${colors.red(cliFunctions.brokenStats(results))}`);
//             console.log('');
//         } else if (validate) {
//             console.log(`\n`);
//             console.log(`Seguimiento de links encontrados en ${path} :`);
//             console.log(`=================================================================================`.gray);
//             results.forEach(linkResult => {
//                 console.log('');
//                 console.log(`   \n${'href    : '.gray}     ${colors.green(linkResult.href)}`);
//                 console.log(`   \n${'text    : '.gray}     ${colors.green(linkResult.text)}`);
//                 console.log(`   \n${'file    : '.gray}     ${colors.green(linkResult.file)}`);
//                 console.log(`   \n${'status  : '.gray}     ${colors.yellow(linkResult.status)}`);
//                 console.log(`   \n${'message : '.gray}     ${linkResult.ok === 'ok' ? colors.green(linkResult.ok) : colors.red(linkResult.ok)}`);
//             });
//             console.log('');  
//         } else if (stats) {
//             console.log(`\n`);
//             console.log(`Estadísticas encontradas en ${path} :`);
//             console.log(`=================================================================================`.gray);
//             console.log('');
//             console.log(`   \n${'Total  : '.gray}     ${colors.green(cliFunctions.totalStats(linkResult))}`);
//             console.log(`   \n${'Unique : '.gray}     ${colors.green(cliFunctions.uniqueStats(linkResult))}`);
//             console.log('');
//         } else {
//             console.log(`\n`);
//             console.log(`Seguimiento de links encontrados en ${path} :`);
//             console.log(`=================================================================================`.gray);
//             results.forEach(linkResult => {
//                 console.log('');
//                 console.log(`   \n${'href    : '.gray}     ${colors.green(linkResult.href)}`);
//                 console.log(`   \n${'text    : '.gray}     ${colors.green(linkResult.text)}`);
//                 console.log(`   \n${'file    : '.gray}     ${colors.green(linkResult.file)}`);
//             });
//             console.log('');
//         }  
//     })
//     .catch((error) => {
//         console.log(error)
//     });



// console.log(`Estadísticas encontradas en:`.blue);
// console.log(`=================================================================================`.gray);
// console.log(`Estadísticas encontradas en :`.cyan);
// console.log(`   ${'TOTAL  : '.gray}     ${colors.green('holaaaaa')}`);
// console.log(`   ${'UNIQUE : '.gray}     ${colors.green('holaaaaa')}`);
// console.log(`   \n${'BROKEN : '.gray}     ${('holaaaaa').red}`);
// console.log('');



// console.log('\n=================================================================================================');
// console.log('"mdLinks"'.bgGreen.black, 'es una libreria que te permite verificar el estado de los enlaces de archivos Markdown.');
// console.log('=================================================================================================');
// console.log(`\n${'>'.gray} USO: ${'md-links <path>'.blue} ${'[--validate] [--stats]'.yellow}`);
// console.log(`\n${'>'.gray} OPCIONES:`);
// console.log('');
// console.log(`    Si corres ${'md-links <path>'.blue} ${'(ninguna opción)'.yellow}`);
// console.log(`    ...........................................`.gray);
// console.log(`
//             href    ${'>>'.gray}   URL encontrado.
//             text    ${'>>'.gray}   Texto que aparece en el link.
//             file    ${'>>'.gray}   Ruta donde se encuentra el archivo.`);
// console.log('\n');
// console.log(`    Si corres ${'md-links <path>'.blue} ${'--validate'.yellow}`);
// console.log(`    ........................................`.gray);
// console.log(`
//             href    ${'>>'.gray}   URL encontrado.
//             text    ${'>>'.gray}   Texto que aparece en el link.
//             file    ${'>>'.gray}   Ruta donde se encuentra el archivo.
//             status  ${'>>'.gray}   Código de status HTTP.
//             message ${'>>'.gray}   ${'"fail"'.red} mensaje en caso de falla, or ${'"ok"'.green} en caso de éxito.`);
// console.log('\n');
// console.log(`    Si corres ${'md-links <path>'.blue} ${'--stats'.yellow}`);
// console.log('    .....................................'.gray);
// console.log(`
//             Total    ${'>>'.gray}   Número total de links.
//             Unique   ${'>>'.gray}   Número de links únicos.`);
// console.log('\n');
// console.log(`    Si corres ${'md-links <path>'.blue} ${'--stats --validate'.yellow}`);
// console.log('    ............................................'.gray);
// console.log(`
//             Total    ${'>>'.gray}   Número total de links.
//             Unique   ${'>>'.gray}   Número de links únicos.
//             Broken   ${'>>'.gray}   Número de links rotos.`);
// console.log('');
// process.exit();