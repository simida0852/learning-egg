'use strict';

const Service = require('egg').Service;

class Poems extends Service {
  /**
     * 获取古诗数据
     */
  async getPoems(payload) {
    const { ctx } = this;
    const { page, pageSize = 20 } = payload;
    let res = [];
    let count = 0;
    try {
      res = await ctx.model.Poems.find({}).limit(Number(pageSize)).sort({ p_index: 1 })
        .collation({ locale: 'en_US', numericOrdering: true })
        .exec();
      console.log('res: ', res);
      count = res.length;
      return { count, data: res, pageSize: Number(pageSize), page: Number(page) };
    } catch (err) {
      ctx.body = JSON.stringify(err);
    }
  }


}

module.exports = Poems;
