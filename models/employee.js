let mongoose = require('mongoose');

let empSchema = new mongoose.Schema({
    empName: { type: String },
    empId: { type: Number },
    empDesg: { type: String },
    empDept: { type: String, enum: ['Development', 'Designing', 'Marketing', 'Support'] },
    empEmail: { type: String, trim: true }
});
    
module.exports = mongoose.model('emp', empSchema)

