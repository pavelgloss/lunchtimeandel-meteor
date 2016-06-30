import { Restaurant } from './Restaurant.js';

export class Tradice extends Restaurant {
  constructor() {
    super();
    this.title = 'Tradice';
    this.longitude = 14.4013353;
    this.latitude = 50.0691197;
  }

  loadData() {
    const today = super.moment().day();
    const $ = super.load('http://www.tradiceandel.cz/cz/denni-nabidka/');
    const food = [];

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
          food.push([name, price]);
        });
      }
    });

    for (let i = 0; i < food.length; i++) {
      super.addToMenu(food[i][0], food[i][1]);
    }
  }
}
