'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, jwt } = app;

  // router.get('/', controller.home.index);

  // // * 新闻
  router.get('/api/v1/news', jwt, controller.news.index);
  router.get('/api/v1/news/:id', jwt, controller.news.show);
  router.post('/api/v1/news', jwt, controller.news.create);
  router.delete('/api/v1/news/:id', jwt, controller.news.delete);


  // * 用户
  router.get('/api/v1/users', controller.user.index);
  router.get('/api/v1/user/:id', controller.user.show);
  router.post('/api/v1/user', controller.user.create);
  router.delete('/api/v1/user/:id', controller.user.delete);
  router.put('/api/v1/user/:id', controller.user.update);

  router.post('/api/v1/user/access/login', controller.userAccess.login);
  router.get('/api/v1/user/access/current', jwt, controller.userAccess.current);


  // * 古诗
  router.get('/api/v1/poems', controller.poems.index);

  // // * 角色

  // router.post('/api/v1/role', controller.role.create);
  // router.delete('/api/v1/role/:id', controller.role.destroy);
  // router.put('/api/v1/role/:id', controller.role.update);
  // router.get('/api/v1/role/:id', controller.role.show);
  // router.get('/api/v1/role', controller.role.index);
  // router.delete('/api/v1/role', controller.role.removes);
  // router.resources('role', '/api/v1/role', controller.role);


  // // * 上传
  // router.post('/api/v1/upload', controller.upload.create);
  // router.post('/api/v1/upload/url', controller.upload.url);
  // router.post('/api/v1/uploads', controller.upload.multiple);
  // router.delete('/api/v1/upload/:id', controller.upload.destroy);
  // // router.put('/api/v1/upload/:id', controller.upload.update)
  // router.post('/api/v1/upload/:id', controller.upload.update); // Ant Design Pro
  // router.put('/api/v1/upload/:id/extra', controller.upload.extra);
  // router.get('/api/v1/upload/:id', controller.upload.show);
  // router.get('/api/v1/upload', controller.upload.index);
  // router.delete('/api/v1/upload', controller.upload.removes);

  // router.redirect('/', '/swagger-ui.html', 302); // 重定向到swagger-ui.html

};
