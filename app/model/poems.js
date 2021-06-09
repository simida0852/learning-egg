'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const PoemsSchema = new Schema({
    p_index: String,
    p_name: String,
    p_content: String,
    p_author: String,
    p_dynasty: String,
    p_img_url: String,
  });
  return mongoose.model('Poems', PoemsSchema);
};
