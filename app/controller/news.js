'use strict';

const Controller = require('egg').Controller;
/**
  * @controller News 新闻接口
  */
class NewsController extends Controller {

  /**
 * @summary 新闻列表
 * @description 新闻列表
 * @router get /api/v1/news
 * @request query number page 从第几页开始
 * @request query number pageSize 每页多少条数据
 * @request query string searchText 检索文本
 * @response 200 queryNewsResponse 成功
 */
  async index() {
    const { ctx, service } = this;
    // 组装参数
    const payload = ctx.query;
    const res = await service.news.getNews(payload);
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
