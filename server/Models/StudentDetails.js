const mongoose = require('mongoose');

const studentDetailsSchema = new mongoose.Schema({
     Name: { type: String, required: true },
     Age: { type: Number, required: true },
     City: { type: String, required: true }
}, {
     collection: 'studentDetails',
});

const studentDetails = mongoose.model('studentDetails', studentDetailsSchema);

module.exports = studentDetails;