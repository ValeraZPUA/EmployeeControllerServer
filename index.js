const express = require('express');
const router = require('./router/index.js');
const cors = require('cors');
require('./db/mongoose');

const PORT   = 3010;
const app = express();


app.use(cors());
app.use(express.json());
app.use(router);


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

