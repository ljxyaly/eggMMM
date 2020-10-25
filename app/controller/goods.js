'use strict';

const Controller = require('egg').Controller;

class GoodsController extends Controller {
  async getCategoryList() {
    const { ctx, app } = this;
    const result = await app.curl('https://w.mmm920.com/api/getCategoryList', {
      method: 'POST',
      contentType: 'json',
      dataType: 'json'
    });
    ctx.status = 200;
    ctx.body = result.data.data;
  }
}

module.exports = GoodsController;
