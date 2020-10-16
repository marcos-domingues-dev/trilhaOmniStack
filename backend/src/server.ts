import path from 'path';
import express from 'express';

import './database/connection';

import routes from './routes';

const app = express();

// -> Habilita o "body" do request
app.use(express.json()); 

// -> Publicando rotas
app.use(routes);

// -> Rota estática: libera acesso ao diretório ""../uploads"
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads'))) 

// -> Configura porta
app.listen(3333);