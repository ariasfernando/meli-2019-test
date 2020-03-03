import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import listController from './controllers/listController';
import detailController from './controllers/detailController';

dotenv.config();

const app = express();
const PORT = process.env.BACKEND_PORT;

app.use(cors());

app.listen(PORT, () => {
  console.log(`Servidor funcionando correctamente en el puerto ${PORT}`);
});

app.get('/api/items', listController);
app.get('/api/items/:id', detailController);