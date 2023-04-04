var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memberSchema = new Schema({
    memberId: { type: 'String'},
    fname: { type: 'String'},
    mname: { type: 'String'},
    lname: { type: 'String'},
}, { toJSON: { virtuals: true } });

module.exports = mongoose.model('members', memberSchema);