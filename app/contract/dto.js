'use strict';

module.exports = {
  user: {
    id: { type: 'string', description: 'id 唯一键' },
    account: { type: 'string', required: true, description: '用户账号' },
    password: { type: 'string', required: true, description: '用户密码' },
    realName: { type: 'string', description: '用户姓名' },
    mobile: { type: 'string', description: '电话' },
    role: { type: 'string', description: '用户角色' },
    avatar: { type: 'string', description: '用户头像' },
    extra: { type: 'string', description: '备注信息' },
    createdAt: { type: 'string', description: '创建时间' },
  },
  group: {
    id: { type: 'string', description: 'id 唯一键' },
    groupName: { type: 'string', description: '组名' },
  },
};
