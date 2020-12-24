const mongoose = require('mongoose');
const Schema =  mongoose.Schema;
mongoose.set('useFindAndModify', false);

// create the user schema
const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    verified:{
        type: Boolean,
        required: true,
        
    },
    date:{
        type: Date,
        required: true
    }
});

module.exports = User = mongoose.model('users',UserSchema);