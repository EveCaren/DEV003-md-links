const {
  pathExist,
  pathAbsolute,
  returnAbsolute,
  itIsFile,
  itIsMd,
  inMdFile,
  //inDirectory,
  getAllLinks,
  findLinks
} = require('../src/index.js');

// Test para cuando la ruta no existe 
describe('pathExist', () => {
  it('should be a function', () => {
    expect(typeof pathExist).toBe('function');
  });

  it('should return "false" if the path does not exist', () => {
    expect(pathExist('example.md')).toBe(false);
  });

  it('should return "true" if the path exist', () => {
    expect(pathExist('README.md')).toBe(true);
  });
});


// Test para identificar si la ruta es absoluta 
describe('pathAbsolute', () => {
  it('should be a function', () => {
    expect(typeof pathAbsolute).toBe('function');
  });

  it('should return "false" if the path is not absolute', () => {
    expect(pathAbsolute('example.md')).toBe(false);
  });

  it('should return "false" if the path is not a string', () => {
    expect(pathAbsolute('')).toBe(false);
  });

  it('should return "true" if the path is absolute', () => {
    expect(pathAbsolute('C:\\Users\\user\\Desktop\\Laboratoria\\DEV003-card-validation\\thumb.png')).toBe(true);
  });
});


// Test para retornar ruta relativa a absoluta  
describe('returnAbsolute', () => {
  it('should return an absolute path for a relative', () => {
    expect(returnAbsolute('directory-test')).toBe('C:\\Users\\user\\Desktop\\Laboratoria\\Proyecto 4\\DEV003-md-links\\directory-test');
  });
});


// Test para identificar que es un archivo
describe('itIsFile', () => {
  it('should be a function', () => {
    expect(typeof itIsFile).toBe('function');
  });

  it('should return "false" if the path is not a file', () => {
    expect(itIsFile('C:\\Users\\user\\Desktop\\Laboratoria\\Proyecto 4\\DEV003-md-links\\directory-test')).toBe(false)
  });

  it('should return "true" if the path is a file', () => {
    expect(itIsFile('C:\\Users\\user\\Desktop\\Laboratoria\\Proyecto 4\\DEV003-md-links\\directory-test\\direct-1\\READ.md')).toBe(true)
  });
});

// Test para identificar que es un archivo .md
describe('itIsMd', () => {
  it('should be a function', () => {
    expect(typeof itIsMd).toBe('function');
  });

  it('should return "false" if the file is not .md', () => {
    expect(itIsMd('directory\\file-texto.txt')).toBe(false);
  });

  it('should return "true" if the file is .md', () => {
    expect(itIsMd('directory-test\\links.md')).toBe(true);
  });
});
// Test que lee archivos md
describe('inMdFile', () => {
  it('should return the contents of a file', async () => {
    expect(await inMdFile('directory-test\\direct-1\\file-file.md')).toEqual('Resumen del proyecto');
  });
});

// Test para ingresar (leer) a directorio y retornar elementos en un array
// describe('inDirectory', () => {
//   it('should be a function', () => {
//     expect(typeof inDirectory).toBe('function');
//   });

//   it('should return an array with the elements in the directory', () => {
//     expect(inDirectory('C:\\Users\\user\\Desktop\\Laboratoria\\Proyecto 4\\DEV003-md-links\\directory-test')).toEquals([
//       'direct-1',
//       'file-texto.txt',
//       'links.md']);
//   });
// });

// Test que retorna array con la ruta de los archivos de los directorio y subdirectorios
describe('getAllLinks', () => {
  ('should be a function', () => {
    expect(typeof getAllLinks).toBe('function');
  });
  it('should return array with links to the files in the directory and subdirectory', () => {
    expect(getAllLinks('directory-test')).toEqual([
      'directory-test\\direct-1\\file-file.md',
      'directory-test\\direct-1\\READ.md',
      'directory-test\\file-texto.txt',
      'directory-test\\links.md'
    ]);
  });
});

// Test que extrae links de los archivos .md y los devuelve en un array
// describe('findLinks', () => {
//   it('should return array with links to the files markdown', () => {
//     return inMdFile('directory-test\\links.md')
//     .then((data) => {
//       expect(findLinks(data, 'directory-test\\links.md')).toEqual([
//         {
//           href: 'https://developer.mozilla.org/es/docs/Glossary/Callback_function',
//           text: 'Función Callback - MDN',
//           file: 'directory-test\\links.md'
//         },
//         {
//           href: 'https://github.com/EveCaren/noexiste',
//           text: 'No existe',
//           file: 'directory-test\\links.md'
//         }
//       ]);
//     });
//   });
// });
