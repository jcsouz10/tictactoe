const express = require('express');

const app = express();
const rotas = require('./rotas')
const port = 3001;

app.get('/', (req, res) => {
  res.send("foi")
});

app.use('/api', rotas);

app.listen(port, () => {
  console.log('Server rodando na porta 3001')
})


