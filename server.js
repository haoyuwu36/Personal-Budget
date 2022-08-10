const express = require('express');
const app = express();

PORT = process.env.PORT || 3000;

if (!module.parent) { 
  // Add your code to start the server listening at PORT below:
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}