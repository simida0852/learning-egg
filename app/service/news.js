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

  // 单条新闻数据
  async show(id) {
    console.log('id: ', typeof id);
    const { ctx } = this;
    const res = await ctx.model.News.findById(id).exec();
    console.log('res: ', res);
    return res;
    // try {
    // } catch (err) {
    //   ctx.body = JSON.stringify(err);
    // }
  }

}

module.exports = News;
