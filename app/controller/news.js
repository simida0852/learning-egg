'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
    const { ctx } = this;

    const res = await ctx.service.news.getNews();

    // 设置响应内容和响应状态码
    ctx.helper.success({ ctx, res });
  }
}

module.exports = NewsController;
