const mongoose = require('mongoose');
const projectSchema = new mongoose.Schema({
Email: {
type: String,
required: true
},
Password: {
type: String,
required: true
}

})
module.exports = mongoose.model('User', projectSchema)

