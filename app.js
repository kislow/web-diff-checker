const express = require('express');
const webserver = express();

webserver.use(express.static('public'));

const PORT = process.env.PORT || 4001;

webserver.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
  });