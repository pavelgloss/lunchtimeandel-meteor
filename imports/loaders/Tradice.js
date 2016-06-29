/* global Meteor, moment */

const cheerio = require('cheerio');

export class Tradice {
  constructor() {
    this.longitude = 14.401515;
    this.latitude = 50.06924;
  }
  addToMenu(name, price = '') {
    this.menu.push({
      food: name,
      price,
    });
  }

  loadData() {
    const today = moment().day();
    const $ = cheerio.load(Meteor.http.get('http://www.tradiceandel.cz/cz/denni-nabidka/').content);
    const loader = this;

    $('.separator-section').each(function parseMenu(i) {
      if (i + 1 === today) {
        $(this).find('.item').each(function parseRow() {
          const name = $(this).find('div')
            .first()
            .text()
            .trim();
          const price = $(this).find('div')
            .last()
            .text()
            .trim()
            .replace(',-', ' Kč');
          loader.addToMenu(name, price);
        });
      }
    });
  }
}
