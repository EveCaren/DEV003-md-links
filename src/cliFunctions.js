// Número total de links
const totalStats = (links) => {
    const total = links.length;
    return total;
};
//console.log(totalStats('directory-test')); //14

// Número de links únicos
const uniqueStats = (links) => {
    const hrefs = links.map(link => link.href);
    const uniqueHrefs = new Set(hrefs); // set: objeto que permite almacenar valores
    return uniqueHrefs.size;
}
// console.log(uniqueStats([{
//     href: 'https://curriculum.laboratoria.la/es/topics/javascript/03-functions/02-arrow',     
//     text: 'Arrow Functions',
//     file: 'directory-test\\direct-1\\READ.md',
//     status: 200,
//     message: 'ok'
//   }
// ]))

// Número de links rotos
const brokenStats = (links) => {
    const errorMsg = links.filter(link => link.message === 'fail')
    const uniqueFails = new Set(errorMsg);
    return uniqueFails.size;
}

// console.log(brokenStats([{
//         href: 'https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions', 
//         text: 'Funciones — bloques de código reutilizables - MDN',
//         file: 'directory-test\\direct-1\\READ.md',
//         status: 404,
//         message: 'fail'
//       },
//       {
//         href: 'https://www.youtube.com/watch?v=lPPgY3HLlhQ',
//         text: 'Píldora recursión - YouTube Laboratoria Developers',
//         file: 'directory-test\\direct-1\\READ.md',
//         status: 200,
//         message: 'ok'
//       }
    
// ]));

module.exports = {
    totalStats,
    uniqueStats,
    brokenStats
};