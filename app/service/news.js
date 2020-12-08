'use strict';

const Service = require('egg').Service;

class News extends Service {
  /**
     * 获取新闻数据
     */
  async getNews() {
    const { ctx } = this;
    try {
      const results = await ctx.model.News.find({}).exec();
      return results;
    } catch (err) {
      ctx.body = JSON.stringify(err);
    }
  }
}

module.exports = News;
