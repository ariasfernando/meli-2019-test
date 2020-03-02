import fetch from 'node-fetch';

export default function DetailController(req, res) {
  Promise.all([
    fetch(`${process.env.BACKEND_URI}items/${req.params.id}`).then(res => res.json()),
    fetch(`${process.env.BACKEND_URI}items/${req.params.id}/description`).then(res => res.json())
  ]).then( value => res.send(value) );
};