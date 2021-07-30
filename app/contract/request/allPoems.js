'use strict';

const allPoemsDocBase = {
  author: { type: 'string', required: true, description: '诗词作者' },
  paragraphs: { type: 'string', required: true, description: '诗词内容' },
  rhythmic: { type: 'string', required: true, description: '诗词标题' },
};


module.exports = {
  poemsRequest: allPoemsDocBase,
  poemsResponse: allPoemsDocBase,
};
