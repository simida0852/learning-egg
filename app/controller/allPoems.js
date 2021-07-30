'use strict';

const Controller = require('egg').Controller;
/**
  * @controller AllPoems 全唐诗接口
  */
class AllPoemsController extends Controller {
    /**
      * @summary 全唐诗列表
      * @description 全唐诗列表
      * @router get /api/v1/allPoems
      * @request query number page 从第几页开始
      * @request query number pageSize 每页多少条数据
      * @request query string searchText 检索文本
      * @response 200 queryAllPoemsResponse 成功
      */
    async index() {
        const { ctx, service } = this;
        // 组装参数
        const payload = ctx.query;

        const res = await service.allPoems.getAllPoems(payload);

        // 设置响应内容和响应状态码
        ctx.helper.success({ ctx, res });
    }
}



module.exports = AllPoemsController;
