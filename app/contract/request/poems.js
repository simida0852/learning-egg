'use strict';

const poemsDocBase = {
  title: { type: 'string', required: true, description: '诗词标题' },
  content: { type: 'string', required: true, description: '诗词内容' },
};


module.exports = {
  poemsRequest: poemsDocBase,
  poemsResponse: poemsDocBase,
};
