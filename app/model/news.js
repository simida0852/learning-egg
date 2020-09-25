// eslint-disable-next-line strict
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const newsSchema = new Schema({
    url: String,
    title: String,
    content: String,
  });
  return mongoose.model('News', newsSchema, 'news'); // 返回model，其中news为数据库中表的名称
};
