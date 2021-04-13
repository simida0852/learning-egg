'use strict';

module.exports = {
  queryUserResponse: {
    data: { type: 'array', itemType: 'user' },
    page: { type: 'integer' },
    pageSize: { type: 'integer' },
    totalCount: { type: 'integer' },
    hasNextPage: { type: 'boolean' },
  },
};
