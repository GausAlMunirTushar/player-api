const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(cors());
app.use(morgan());
app.use(express.json());

/**
* Player Microservice
* CRUD  -       Create Read Update Delete
* GET   - /     - find all player
* POST  - /     - create a new player and save db
* GET   - /:id  - find a single player
* PUT   - /:id  - update or create player
* PATCH - /:id  - update player
* DELETE- /:id  - delete  a player from db
*/
app.get('/health', (req, res)=>{
    res.status(200).json({
        status: 'OK',
    })
})

module.exports = app;