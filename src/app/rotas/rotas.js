const livroRotas = require('./livro-rotas.js');
const baseRotas = require('./base-rotas.js');

module.exports = (app) => {
    baseRotas(app);
    livroRotas(app);
};