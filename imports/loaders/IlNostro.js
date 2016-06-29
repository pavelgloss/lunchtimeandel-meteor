/* global Meteor, moment */

const cheerio = require('cheerio');

export class IlNostro {
  constructor() {
    this.longitude = 14.4007850;
    this.latitude = 50.0715817;
  }

  addToMenu(name, price = '') {
    this.menu.push({
      food: name,
      price,
    });
  }

  loadData() {
    const today = moment().day();
    const $ = cheerio.load(Meteor.http.get('http://www.ilnostro.cz/cz/tydenni-menu').content);
    const loader = this;

    $('.obsah table').each(function parseMenu(i) {
      if (i + 1 === today) {
        $(this).find('tr').each(function parseRow() {
          const name = $(this).find('td')
            .eq(1)
            .text()
            .trim();
          const price = $(this).find('td')
            .last()
            .text()
            .trim();
          loader.addToMenu(name, price);
        });
      }
    });
  }
}
