const fetch = require('node-fetch');

module.exports = function ListController(req, res) {
  fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}`)
    .then(res => res.json())
    .then(json => res.send(json))
};