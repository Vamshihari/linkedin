const mongoose = require('mongoose');
const projectSchema = new mongoose.Schema({
email: {
type: String,
required: true
},
password: {
type: Number,
required: true
}

})
module.exports = mongoose.model('User', projectSchema)

