// Trong tệp ./config/db

const mongoose = require('mongoose');

const local = "mongodb://127.0.0.1:27017/MD18306";
const atlat ="mongodb+srv://tampdph33277:Tam038306@cluster0.4wsj6vl.mongodb.net/MD18306"
const connect = async () => {
    try {
        await mongoose.connect(local);
        console.log('Connect success');
    } catch (error) {
        console.log(error);
        console.log('Connect fail');
    }
};
module.exports = { connect };