var mongoose = require("mongoose");

var Schema = mongoose.Schema;

//This is the schema from Mongoose
var ArticleSchema = new Schema({
  headline: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true,
  },
  notes: [{
    type: Schema.Types.ObjectId,
    ref: "Note"
  }]
});

//Here it is turned into a model
var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;