require('axios');
const { mdLinks } = require('../src/index.js');

describe('mdLinks', () => {
    it('should be a function', () => {
        expect(typeof mdLinks).toBe('function');
    });

    it('should be return a promise', async() => {
        return mdLinks().then(() => {
            expect(mdLinks).toBe(typeof 'promise')
        })
            .catch((error) => { error });
    });

    it('should be return an object array with href, text and file', () => {
        const path = 'directory-test\\links.md';
        const array = [
            {
                href: 'https://developer.mozilla.org/es/docs/Glossary/Callback_function',
                text: 'Función Callback - MDN',
                file: 'C:\\Users\\user\\Desktop\\Laboratoria\\Proyecto 4\\DEV003-md-links\\directory-test\\links.md'
            },
            {
                href: 'https://github.com/EveCaren/noexiste',
                text: 'No existe',
                file: 'C:\\Users\\user\\Desktop\\Laboratoria\\Proyecto 4\\DEV003-md-links\\directory-test\\links.md'
            }
        ];
        expect(mdLinks(path, { validate: false })).resolves.toStrictEqual(array);
    });

    it('should be return an object array with href, text, file, status and message', () => {
        const path = 'directory-test\\links.md';
        const array = [
            {
                href: 'https://developer.mozilla.org/es/docs/Glossary/Callback_function',
                text: 'Función Callback - MDN',
                file: 'C:\\Users\\user\\Desktop\\Laboratoria\\Proyecto 4\\DEV003-md-links\\directory-test\\links.md',
                status: 200,
                message: 'ok'
            },
            {
                href: 'https://github.com/EveCaren/noexiste',
                text: 'No existe',
                file: 'C:\\Users\\user\\Desktop\\Laboratoria\\Proyecto 4\\DEV003-md-links\\directory-test\\links.md',
                status: 404,
                message: 'fail'
            }
        ];
        expect(mdLinks(path, { validate: true })).resolves.toStrictEqual(expect.anything(array));
    });
});
