'use strict';

const Service = require('egg').Service;

class Poems extends Service {
  /**
     * 获取古诗数据
     */
  async getPoems(payload) {
    const { ctx } = this;
    const { page = 1, pageSize } = payload;
    let res = [];
    let count = 0;
    try {
      res = await ctx.model.Poems.find({}).limit(Number(pageSize)).sort({ p_index: 1 })
        .collation({ locale: 'en_US', numericOrdering: true })
        .exec();
      count = res.length;
      return { count, list: res, pageSize: Number(pageSize), page: Number(page) };
    } catch (err) {
      ctx.body = JSON.stringify(err);
    }
  }
  // 单条古诗数据
  async show(id) {
    const { ctx } = this;
    try {
      const res = await ctx.model.Poems.findById(id).exec();
      return res;
    } catch (error) {
      ctx.body = JSON.stringify(error);
    }
  }

}

module.exports = Poems;
