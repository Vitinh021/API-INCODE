const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const routes = require('./routes');

app.use(cors()); 
app.use(express.json());

app.use('/api', routes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`API rodando em http://localhost:${PORT}`);
});