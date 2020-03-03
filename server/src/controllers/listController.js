import fetch from 'node-fetch';
import Factory from './../helpers/Factory';

export default function ListController(req, res) {
  fetch(`${process.env.BACKEND_URI}sites/MLA/search?q=${req.query.q}`)
    .catch( err => console.log(err))
    .then(res => res.json())
    .then( data => {
      if (data.results.length === 0) { 
        throw 'No hay resultados para tu búsqueda'; 
      } else {
        return data;
      }
    })
    .then(data => Factory.createSearchListFromAPI(data))
    .then(json => res.send(json))
    .catch( (message, error) => { 
      res.status(404).send(message);
      console.log(message, error);
    });
}