var mongoose = require('mongoose');
//var Schema = mongoose.Schema 
//^used for associations

var <OBJECT>Schema = new mongoose.Schema({}, {timestamps: true});
//for associations: _customer: [{type: Schema.Types.ObjectId, ref: "Customer"}];
//reference it by the actual key, not the ref value.
mongoose.model('<OBJECT>', <OBJECT>Schema);