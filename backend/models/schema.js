/**
 * Install node modules
 * Intializing schema to store data with respect to backend schema
 * @author: HARI VAMSHI
 * @author: SURYA KANT
 *
 */

const mongoose = require('mongoose');
const projectSchema = new mongoose.Schema({
email: {
type: String,
required: true
},
password: {
type: String,
required: true
},
name: {
type: String,
required: true
},
surname: {
type: String,
required: true
},
occupation: {
type: String,
required: true
},
phonenumber: {
type: Number,
required: true
}
})
module.exports = mongoose.model('User', projectSchema)

