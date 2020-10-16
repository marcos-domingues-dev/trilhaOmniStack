import express from 'express';
import path from 'path';

//-> Bloqueio de outros domínios
//    Faça o import do 'cors' para desabilitar a função de 
//    segurança do Node.js, que faz bloqueio 
//    que impede requisições de outros domínios.
import cors from 'cors'; 

import 'express-async-errors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler'

const app = express();

// -> Habilita o "body" do request
app.use(express.json()); 

// -> Publicando rotas
app.use(routes);

// -> Rota estática: libera acesso ao diretório ""../uploads"
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads'))) 

// -> Tratamento de exceções
app.use(errorHandler);

// -> Habilitar outros domínios
app.use(cors());

// -> Configura porta
app.listen(3333);