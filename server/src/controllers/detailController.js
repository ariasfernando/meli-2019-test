import fetch from 'node-fetch';
import Factory from './../helpers/Factory';

export default function DetailController(req, res) {
  Promise.all([
    fetch(`${process.env.BACKEND_URI}items/${req.params.id}`).then(res => res.json()),
    fetch(`${process.env.BACKEND_URI}items/${req.params.id}/description`).then(res => res.json())
  ]).then( data => Factory.createItemFromAPI(data) )
    .then( item => res.send(item) )
    .catch( () => res.status(404).send('El item no existe'));
};