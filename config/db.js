const mongoose = require('mongoose');
const {MONGO_URL} = require('./server-config');

const connect = async () => {
    try {
        await  mongoose.connect(MONGO_URL);
        console.log("MongoDB Connected");
    } catch (error) {
        console.log(error);
    }
};

module.exports = connect;
