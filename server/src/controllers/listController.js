import fetch from 'node-fetch';

export default function ListController(req, res) {
  fetch(`${process.env.BACKEND_URI}sites/MLA/search?q=${req.query.q}`)
    .then(res => res.json())
    .then(json => res.send(json));
}