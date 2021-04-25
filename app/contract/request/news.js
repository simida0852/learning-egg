'use strict';

const newsDocBase = {
  searchText: { type: 'string', required: false, description: '检索文本' },
};


module.exports = {
  userRequest: newsDocBase,
  userResponse: newsDocBase,
};
