'use strict';
const Service = require('egg').Service;

class AllPoems extends Service {
  /**
     * 获取全唐诗数据
     */
  async getAllPoems(payload) {
    const { ctx } = this;
    const { page = 1, pageSize } = payload;
    let res = [];
    let resData = []
    let count = 0;
    let skip = ((Number(page || 1)) - 1) * Number(pageSize || 5)
    try {
      resData = await ctx.model.AllPoems.find({}).skip(skip).limit(Number(pageSize)).sort()
        .collation({ locale: 'en_US', numericOrdering: true })
        .exec();
      res = await ctx.model.AllPoems.makeItSimple(resData) // *将繁体文字装换为简体文字
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
      const res = await ctx.model.AllPoems.findById(id).exec();
      return res;
    } catch (error) {
      ctx.body = JSON.stringify(error);
    }
  }

}

module.exports = AllPoems;
