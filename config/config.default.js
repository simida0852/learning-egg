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


  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};