'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1548044611905_6782';

  // add your config here
  config.middleware = [];


  config.sequelize = {
    dialect: 'mysql',
    database: 'miao',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'WangYang534591395@qq.com',
  };

  config.mysql = {
    client: {
      database: 'miao',
      host: '127.0.0.1',
      port: 3306,
      user: 'root',
      password: 'WangYang534591395@qq.com',
    }
  };

  config.view = {
    mapping: {
      '.html': 'nunjucks',
    }
  };
  
  config.errorCode = {
    NO_PERMISION: 1001
  };

  return config;
};
