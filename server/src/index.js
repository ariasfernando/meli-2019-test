import express from 'express';

const app = express();

const PORT = process.env.PORT || 4000;

import listController from './controllers/listController';

console.log("Index: ", listController);