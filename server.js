const express = require('express');
const cors = require('cors');
const {PORT}  = require('./config/server-config');
const connect = require('./config/db');
const apiRoutes = require('./routes/index');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api',apiRoutes)

app.listen(PORT, async ()=> {
    console.log(`server started on port ${PORT}`);
    await connect();
});