const mongoose = require('mongoose');
const connect = mongoose.connect("mongodb://127.0.0.1:27017/SoundScape")

connect.then(() => {
    console.log("Database connected");
})
.catch(() => {
    console.log("Database cennot be connected");
})
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
});

const User = mongoose.model('user', userSchema);

module.exports = User;