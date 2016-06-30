/* global Meteor, moment */

const cheerio = require('cheerio');

export class Restaurant {
  addToMenu(name, price = '') {
    this.menu.push({
      food: name,
      price,
    });
  }

  load(url) {
    const content = Meteor.http.get(url).content;
    return cheerio.load(content);
  }

  moment() {
    return moment();
  }
}
