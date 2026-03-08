const express = require('express');
const cors = require('cors');
const {PORT}  = require('./config/server-config');
const connect = require('./config/db');

const app = express();

app.use(cors());
app.use(express.json());


app.get('/',(req,res)=> {
    res.send("Protfolio Api Running");
} )

app.listen(PORT, async ()=> {
    console.log(`server started on port ${PORT}`);
    await connect();
});