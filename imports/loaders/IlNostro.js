import { Restaurant } from './Restaurant.js';

export class IlNostro extends Restaurant {
  constructor() {
    super();
    this.title = 'Il Nostro';
    this.longitude = 14.4007850;
    this.latitude = 50.0715817;
  }

  loadData() {
    const today = super.moment().day();
    const $ = super.load('http://www.ilnostro.cz/cz/tydenni-menu');
    const food = [];

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
          food.push([name, price]);
        });
      }
    });

    for (let i = 0; i < food.length; i++) {
      super.addToMenu(food[i][0], food[i][1]);
    }
  }
}
