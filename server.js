const express = require('express');
const next = require('next');
require("dotenv").config();
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/point/:pointId', (req, res) => {
      const { pointId } = req.params;
      app.render(req, res, '/point', { ...req.query, pointId });
    });

    server.get('*', (req, res) => handle(req, res));
    
    server.listen(process.env.PORT, err => {
      if (err) throw err;
      console.log(`> Next server ready on ${process.env.PORT} port`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
