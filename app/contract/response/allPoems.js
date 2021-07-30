'use strict';

module.exports = {
  queryAllPoemsResponse: {
    data: { type: 'array', itemType: 'poems' },
    page: { type: 'integer' },
    pageSize: { type: 'integer' },
    totalCount: { type: 'integer' },
    hasNextPage: { type: 'boolean' },
  },
};
