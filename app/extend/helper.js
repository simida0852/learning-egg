'use strict';


const moment = require('moment');

// 格式化时间
exports.formatTime = time => moment(time).format('YYYY-MM-DD HH:mm:ss');


// 处理成功响应
exports.success = ({ ctx, res = null, msg = '请求成功' }) => {
  ctx.body = {
    code: 200,
    data: res,
    total: res && res.length,
    msg,
  };
  ctx.status = 200;
};
// 处理失败响应
exports.failure = ({ ctx, res = null, msg = '请求失败' }) => {
  console.log('msg: ', msg);
  console.log('res: ', res);
  console.log('ctx: ', ctx);

};
