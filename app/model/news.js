'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const NewsSchema = new Schema({
    _id: String,
    url: String,
    title: String,
    content: String,
  });
  return mongoose.model('News', NewsSchema, 'news'); // 返回model，其中news为数据库中表的名称
};
