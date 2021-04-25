'use strict';

const Service = require('egg').Service;

class News extends Service {
  /**
     * 获取新闻数据
     */
  async getNews(payload) {
    const { ctx } = this;
    const { page, pageSize, searchText } = payload;
    let res = [];
    let count = 0;
    const skip = ((Number(page)) - 1) * Number(pageSize || 10);
    try {
      res = await ctx.model.News.find({ title: { $regex: searchText } }).skip(skip).limit(Number(pageSize))
        .sort({ createdAt: -1 })
        .exec();
      count = res.length;
      return { count, list: res, pageSize: Number(pageSize), page: Number(page) };
    } catch (err) {
      ctx.body = JSON.stringify(err);
    }
  }
  // 单条新闻数据
  async show(id) {
    const { ctx } = this;
    try {
      const res = await ctx.model.News.findById(id).exec();
      return res;
    } catch (err) {
      ctx.body = JSON.stringify(err);
    }
  }

}

module.exports = News;
