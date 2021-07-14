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

  /**
* @summary 创建新闻
* @description 创建新闻
* @router post /api/v1/news
* @request body newsRequest *body
* @response 200 newsResponse 成功
*/
  async create() {
    const { ctx, service } = this;
    // 组装参数
    const payload = ctx.request.body || {};
    // 调用 Service 进行业务处理
    const res = await service.news.create(payload);
    // 设置响应内容和响应状态码
    ctx.helper.success({ ctx, res });
  }

  /**
* @summary 删除新闻
* @description 删除新闻
* @router delete /api/v1/news/{id}
* @request path string *id 新闻id
* @response 200 newsResponse 成功
*/
  async delete() {
    const { ctx, service } = this;
    // 校验参数
    const { id } = ctx.params;
    // 调用 Service 进行业务处理
    const res = await service.news.delete(id);
    // 设置响应内容和响应状态码
    ctx.helper.success({ ctx, res });
  }

  /**
* @summary 修改新闻
* @description 修改新闻
* @router put /api/v1/news/{id}
* @request path string *id 新闻id
* @request body newsRequest *body
* @response 200 newsResponse 成功
*/
  async update() {
    const { ctx, service } = this;
    // 组装参数
    const { id } = ctx.params;
    const payload = ctx.request.body || {};
    // 调用 Service 进行业务处理
    await service.news.update(id, payload);
    // 设置响应内容和响应状态码
    ctx.helper.success({ ctx });
  }


}

module.exports = NewsController;
