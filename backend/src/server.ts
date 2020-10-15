import express from 'express';

import './database/connection';

const app = express();
app.use(express.json()); // -> Habilita o "body" do request

app.get('/users', (request, response) => {
  return response.json({ message: 'Hello word'});
});

app.listen(3333);