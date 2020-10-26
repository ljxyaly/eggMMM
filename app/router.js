'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.home);
  router.get('/api/product/list4phone', controller.home.index);
  router.get('/api/getCategoryList', controller.goods.getCategoryList);
};
