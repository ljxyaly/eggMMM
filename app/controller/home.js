'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx, app } = this;
    const result = await app.curl('https://w.mmm920.com/api/index4phone', {
      method: 'POST',
      contentType: 'json',
      dataType: 'json'
    });
    result.data.data.banner.map(item => {
      item.image = "https://image.mmm920.com/upload/" + item.picturePath
    })
    ctx.status = 200;
    ctx.body = result.data.data;
  }
}

module.exports = HomeController;
