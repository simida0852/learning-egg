'use strict';

const newsDocBase = {
  title: { type: 'string', required: true, description: '新闻标题' },
  content: { type: 'string', required: true, description: '新闻内容' },
};


module.exports = {
  newsRequest: newsDocBase,
  newsResponse: newsDocBase,
};
