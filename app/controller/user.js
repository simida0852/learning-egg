'use strict';

const Controller = require('egg').Controller;

/**
  * @controller User 用户接口
  */

class UserController extends Controller {

  // // 登录
  // async login() {
  //   const { ctx, app } = this;
  //   const data = ctx.request.body;
  //   const token = app.jwt.sign({
  //     nickname: data.nickname,
  //   }, app.config.jwt.secret);
  //   ctx.body = token;
  // }


  /**
   * @summary 用户列表
   * @description 用户列表
   * @router get /api/v1/users
   * @request query number page 从第几页开始
   * @request query number pageSize 每页多少条数据
   * @request query string name 用户名称
   * @response 200 queryUserResponse 成功
   */
  async index() {
    const { ctx, service } = this;
    // 组装参数
    const payload = ctx.query;
    // 调用 Service 进行业务处理
    const res = await service.user.index(payload);
    // 设置响应内容和响应状态码
    ctx.helper.success({ ctx, res });
  }

  /**
  * @summary 用户详情
  * @description 用户详情
  * @router get /api/v1/user/{id}
  * @request path string *id 用户id
  * @response 200 queryUserResponse 成功
  */
  async show() {
    const { ctx, service } = this;
    // 组装参数
    const { id } = ctx.params;
    // 调用 Service 进行业务处理
    const res = await service.user.show(id);
    // 设置响应内容和响应状态码
    ctx.helper.success({ ctx, res });
  }

  /**
* @summary 创建用户
* @description 创建用户
* @router post /api/v1/user
* @request body userRequest *body
* @response 200 userResponse 成功
*/
  async create() {
    const { ctx, service } = this;
    // 组装参数
    const payload = ctx.request.body || {};
    // 调用 Service 进行业务处理
    const res = await service.user.create(payload);
    // 设置响应内容和响应状态码
    ctx.helper.success({ ctx, res });
  }

  /**
* @summary 删除用户
* @description 删除用户
* @router delete /api/v1/user/{id}
* @request path string *id 用户id
* @response 200 userResponse 成功
*/
  async delete() {
    const { ctx, service } = this;
    // 校验参数
    const { id } = ctx.params;
    // 调用 Service 进行业务处理
    await service.user.delete(id);
    // 设置响应内容和响应状态码
    ctx.helper.success({ ctx });
  }

  /**
* @summary 修改用户
* @description 修改用户
* @router put /api/v1/user/{id}
* @request path string *id 用户id
* @request body userRequest *body
* @response 200 userResponse 成功
*/
  async update() {
    const { ctx, service } = this;
    // 组装参数
    const { id } = ctx.params;
    const payload = ctx.request.body || {};
    // 调用 Service 进行业务处理
    await service.user.update(id, payload);
    // 设置响应内容和响应状态码
    ctx.helper.success({ ctx });
  }

}

module.exports = UserController;
