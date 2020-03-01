const fetch = require('node-fetch');

module.exports = function DetailController(req, res) {
  console.log(req.params.id);
  Promise.all([
    fetch(`https://api.mercadolibre.com/items/${req.params.id}`).then(res => res.json()),
    fetch(`https://api.mercadolibre.com/items/${req.params.id}/description`).then(res => res.json())
  ]).then( value => res.send(value) );
};