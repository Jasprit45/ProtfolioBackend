const express = require('express');
const cors = require('cors');
const {PORT}  = require('./config/server-config');
const connect = require('./config/db');
const apiRoutes = require('./routes/index');
const app = express();
const bodyParser = require('body-parser');

app.use(cors());
app.use(express.json());



app.listen(PORT, async ()=> {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api',apiRoutes);
    console.log(`server started on port ${PORT}`);
    await connect();
});