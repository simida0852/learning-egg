'use strict';

const userDocBase = {
  account: { type: 'string', required: true, description: '用户账号' },
  password: { type: 'string', required: true, description: '用户密码' },
  realName: { type: 'string', required: true, description: '用户姓名' },
  mobile: { type: 'string', required: true, example: '13672686560', format: /^1[34578]\d{9}$/, description: '用户电话' },
  avatar: { type: 'string', required: false, example: 'https://1.gravatar.com/avatar/a3e54af3cb6e157e496ae430aed4f4a3?s=96&d=mm', description: '用户头像' },
  extra: { type: 'string', required: false, description: '备注信息' },
};


module.exports = {
  userRequest: userDocBase,
  userResponse: userDocBase,
};
