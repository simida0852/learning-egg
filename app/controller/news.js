'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {

  // 获取新闻列表(分页/模糊)
  async index() {
    const { ctx } = this;

    const res = await ctx.service.news.getNews();

    // 设置响应内容和响应状态码
    ctx.helper.success({ ctx, res });
  }


  // 获取新闻详情
  async show() {
    const { ctx, service } = this;
    // 组装参数
    const { id } = ctx.params;
    // 调用 Service 进行业务处理
    const res = await service.news.show(id);
    // 设置响应内容和响应状态码
    ctx.helper.success({ ctx, res });
  }

}

module.exports = NewsController;
