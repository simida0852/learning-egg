'use strict';

module.exports = {
  queryNewsResponse: {
    data: { type: 'array', itemType: 'news' },
    page: { type: 'integer' },
    pageSize: { type: 'integer' },
    totalCount: { type: 'integer' },
    hasNextPage: { type: 'boolean' },
  },
};
