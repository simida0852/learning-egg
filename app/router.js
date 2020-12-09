'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, jwt } = app;
  router.get('/', controller.home.index);

  // * 新闻
  router.get('/api/v1/news', controller.news.index);
  router.get('/api/v1/news/:id', controller.news.show);


  // * 用户
  router.get('/api/v1/users', controller.user.index);
  router.get('/api/v1/user/:id', controller.user.show);
  router.post('/api/v1/user', controller.user.create);
  router.delete('/api/v1/user/:id', controller.user.delete);
  router.put('/api/v1/user/:id', controller.user.update);


  router.post('/api/v1/user/access/login', controller.userAccess.login);
  router.get('/api/v1/user/access/current', jwt, controller.userAccess.current);

};
