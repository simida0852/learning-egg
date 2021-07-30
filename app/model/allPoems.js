'use strict';
const simplify = require("hanzi-tools").simplify;


module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;


  const AllPoemsSchema = new Schema({
    author: String,
    title: String,
    paragraphs: String,
    rhythmic: String,
  });

  AllPoemsSchema.statics.makeItSimple = (data) => {
    return data.map(d => {
      let author = simplify(d.author)
      let title = simplify(d.title)
      let paragraphs = simplify(d.paragraphs)
      return {
        author,
        paragraphs,
        title
      }
    })

  }


  return mongoose.model('AllPoems', AllPoemsSchema, 'poems');
};
