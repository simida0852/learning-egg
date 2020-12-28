/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1600312065747_9329';

  // add your middleware config here
  config.middleware = [];
  // default 10
  config.bcrypt = {
    saltRounds: 10,
  };
  config.jwt = {
    secret: '123456',
  };
  config.mongoose = {
    client: {
      url: 'mongodb://localhost/news',
      options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    },
  };
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    domainWhiteList: [ 'http://localhost:7001' ],
  };
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };
  // swagger文档配置
  config.swaggerdoc = {
    dirScanner: './app/controller', // 插件扫描的文档路径
    apiInfo: {
      title: 'swagger文档',
      description: 'egg.js swagger-demo文档',
      version: '1.0.0',
    },
    consumes: [ 'application/json', 'multipart/form-data' ], // 指定处理请求的提交内容类型（Content-Type），例如application/json, text/html
    produces: [ 'application/json', 'multipart/form-data' ], // 指定返回的内容类型，仅当request请求头中的(Accept)类型中包含该指定类型才返回
    schemes: [ 'http', 'https' ],
    routerMap: true, // 是否自动生成route
    enable: true,
  };


  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
