'use strict';

const Service = require('egg').Service;
class News extends Service {
  /**
     * 获取新闻数据
     */
  async getNews(payload) {
    const { ctx } = this;
    const { page = 1, pageSize = 99999, searchText } = payload;
    let res = [];
    const skip = ((Number(page)) - 1) * Number(pageSize || 10);
    try {
      if (searchText) {
        res = await ctx.model.News.find({ title: { $regex: searchText } }).skip(skip).limit(Number(pageSize))
          .sort({ createdAt: -1 })
          .exec();
      }
      res = await ctx.model.News.find({}).skip(skip).limit(Number(pageSize))
        .sort({ createdAt: -1 })
        .exec();
      return { list: res, pageSize: Number(pageSize), page: Number(page) };
    } catch (error) {
      ctx.body = JSON.stringify(error);
    }
  }
  // 单条新闻数据
  async show(id) {
    const { ctx } = this;
    try {
      const res = await ctx.model.News.findById(id).exec();
      return res;
    } catch (error) {
      ctx.body = JSON.stringify(error);
    }
  }
  // 添加新闻
  async create(payload) {
    const { ctx } = this;
    return ctx.model.News.create({ ...payload });
  }
  // 删除新闻
  async delete(_id) {
    const { ctx } = this;
    try {
      const res = ctx.model.News.findOneAndRemove({ _id });
      return res;
    } catch (error) {
      ctx.body = JSON.stringify(error);
    }

  }
}


module.exports = News;
