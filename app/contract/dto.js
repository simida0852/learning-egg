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
  news: {
    id: { type: 'string' },
    url: { type: 'string' },
    title: { type: 'string' },
    content: { type: 'string' },
  },
  poems: {
    index: { type: 'string', description: '序号' },
    name: { type: 'string', description: '名称' },
    content: { type: 'string', description: '内容' },
    author: { type: 'string', description: '作者名' },
    dynasty: { type: 'string', description: '朝代' },
    img_url: { type: 'string', description: '图片地址' },
  },
};
