const {
    pathExist,
    pathAbsolute,
    returnAbsolute,
    itIsFile,
    itIsMd,
    inMdFile,
    findLinks,
    validateLink
} = require('./src/index.js')

//------------------------- Función general mdLinks--------------------------
const mdLinks = (path, options) => new Promise ((resolve, reject)=> {
    if (pathExist(path)) { //identifica si la ruta existe
        if(!pathAbsolute(path)) { // si es absoluta
            const absolutePath = returnAbsolute(path);
            if(itIsFile(absolutePath)) { //identifica si es archivo
                if((itIsMd(path))) {
                    let elements = inMdFile(path); // lee archivos md
                    if(elements !== '') {
                        const arrayObject = findLinks(elements, absolutePath);
                        if(arrayObject !== '' && options.validate !== false) {
                            resolve(validateLink(arrayObject, absolutePath));
                        } else if (arrayObject !== ''  && options.validate !== true) {
                            resolve(arrayObject);
                        }
                    } else {
                        reject(`No links found in this file.`);
                    } 
                } else {
                    reject(new Error(`It is not a Markdown file.`));
                }
            }
        } else {
            reject(new Error(`It is not a file.`));
        }
    } else {
        reject(new Error(`The path is not valid`));
    }
});


console.log(findLinks(inMdFile('directory-test\\links.md', 'directory-test\\links.md'))).then(resp => console.log(resp));
mdLinks('directory-test\\links.md', {validate:false}).then(resp => console.log(resp));
mdLinks('directory-test\\links.md', {validate:true}).then(resp => console.log(resp));

    module.exports = {
        mdLinks
    };