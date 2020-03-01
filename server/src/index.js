const express = require('express');
const listController = require('./controllers/listController');
const detailController = require('./controllers/detailController');

const app = express();
const SECRET = "MBcth9c9ZDiINBMjUZQH3Mmk2ET99vDL";
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor funcionando correctamente en el puerto ${PORT}`);
});

app.get('/api/items', listController);
app.get('/api/items/:id', detailController);