  
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

//This is the schema from Mongoose
var NoteSchema = new Schema({
  body: {
    type: String,
    required: true
  }
});

//Here it is turned into a model
var Note = mongoose.model("Note", NoteSchema);

module.exports = Note;