const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Identifica si la ruta existe
const pathExist = (mdPath) => fs.existsSync(mdPath);
//console.log(pathExist('README.md'));

// Identifica si la ruta es absoluta
const pathAbsolute = (mdPath) => path.isAbsolute(mdPath);
//console.log(pathAbsolute('example/example.png'));

// Convierte ruta relativa a absoluta
const returnAbsolute = (mdPath) => (pathAbsolute(mdPath) ? mdPath : path.resolve(mdPath));
//console.log(returnAbsolute('greencoffee/example.md'));

// --------------------------------FILE----------------------------------------

// Identifica si la ruta es un archivo
const itIsFile = (mdPath) => fs.statSync(mdPath).isFile();
//console.log(itIsFile('C:\\Users\\user\\Desktop\\Laboratoria\\Proyecto 4\\DEV003-md-links\\directory-test\\direct-1\\READ.md'));

// Identifica que el archivo es .md
const itIsMd = (filePath) => path.extname(filePath) === '.md' ? true : false;
//console.log(itIsMd('prueba1/example.md'));

// lee archivos .md
const inMdFile = (filePath) => fs.readFileSync(filePath, 'utf8');
//console.log(inMdFile('directory-test\\direct-1\\READ.md'));

// ----------------------------DIRECTORY----------------------------------

// Leer el directorio 
const inDirectory = (directoryPath) => fs.readdirSync(directoryPath);
//console.log(inDirectory('directory-test'));

// Retorna array con la ruta de los  archivos que están en los directorio y subdirectorios
const getAllLinks = (directoryPath, fileArray = []) => {
    const dirElements = inDirectory(directoryPath);
    dirElements.forEach((dirElement => {
        const elementRoute = path.join(directoryPath, dirElement);
        const fileOrDirectory = fs.statSync(elementRoute);
        if (fileOrDirectory.isDirectory(directoryPath)) {
            getAllLinks(elementRoute, fileArray);
        } else {
            fileArray.push(elementRoute);
        }
    }))
    return fileArray;
};
console.log(getAllLinks('directory-test'));

// Extrae links del archivo .md y lo devuelve en un array 
const findLinks = (data, fileRoute) => {
    const regEx = /\[(.+)\]\((https?:\/\/.+)\)/g;//
    let arrayLinks = [...data.matchAll(regEx)];
    //console.log(arrayLinks);
    let arrayObjects = [];
    //console.log(arrayObjects);
    for (let i = 0; i < arrayLinks.length; i++) {
        arrayObjects.push({
            href: arrayLinks[i][2],
            text: arrayLinks[i][1],
            file: fileRoute,
        });
    }
    return arrayObjects;
};
//console.log(findLinks('README.md'));
console.log(findLinks(inMdFile('directory-test\\direct-1\\READ.md', 'directory-test\\direct-1\\READ.md')));


// Valida links y devuelve en un array características 
const validateLink = (linksArray, fileRoute) => {
    let arrayProm = [];
    for (let i = 0; i < linksArray.length; i++) {
        const arrObjects = linksArray[i];
        const link = axios.get(arrObjects.href)
            .then((resp) => ({
                href: resp.config.url,
                text: arrObjects.text,
                file: fileRoute,
                status: resp.status,
                message: 'ok',
            }))
            .catch((error) => {
                if ('response' in error) {
                    return {
                        href: arrObjects.href,
                        text: arrObjects.text,
                        file: fileRoute,
                        status: error.response.status,
                        message: 'fail',
                    };
                };

            });
            arrayProm.push(link);
    }
    return Promise.all(arrayProm);
};
  
const fileContent = inMdFile('directory-test\\direct-1\\READ.md');
const objectArray = findLinks(fileContent);
validateLink(objectArray, 'directory-test\\direct-1\\READ.md').then(console.log);

// const arr1 = [1, 2, 3, 4],
//     arr2 =[5, 6, 7, 8];
// console.log(arr1, arr2);

// const arr3 =[...arr1, ...arr2];
// console.log(arr3);

module.exports = {
    pathExist,
    pathAbsolute,
    returnAbsolute,
    itIsFile,
    itIsMd,
    inMdFile,
    findLinks,
    getAllLinks,
    validateLink
};


