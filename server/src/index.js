import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

import listController from './controllers/listController';
import detailController from './controllers/detailController';

const app = express();
const PORT = process.env.BACKEND_PORT;

app.listen(PORT, () => {
  console.log(`Servidor funcionando correctamente en el puerto ${PORT}`);
});

app.get('/api/items', listController);
app.get('/api/items/:id', detailController);