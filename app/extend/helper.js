'use strict';

// 处理成功响应
exports.success = ({ ctx, res = null, msg = '请求成功' }) => {
  ctx.body = {
    code: 200,
    data: res,
    total: res.length,
    msg,
  };
  ctx.status = 200;
};
