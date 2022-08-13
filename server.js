const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const envRouter = require('./envRouter');
app.use('/api', envRouter);

PORT = process.env.PORT || 3000;

if (!module.parent) { 
  // Add your code to start the server listening at PORT below:
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}