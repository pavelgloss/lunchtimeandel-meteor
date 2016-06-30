import { Restaurant } from './Restaurant.js';

export class HomeOffice extends Restaurant {
  constructor() {
    super();
    this.title = 'HomeOffice';
    this.longitude = 14.4011792;
    this.latitude = 50.0716481;
  }

  loadData() {
    const today = super.moment().format('dddd D/M');
    const location = 'Radlická';
    const locationAfter = 'Butovice';
    let dayFound = false;
    let locationFound = false;
    const $ = super.load('http://homeofficebistro.cz/tydenni-menu/');

    const menuRows = $('table tr');

    for (let i = 0; i < menuRows.length; i++) {
      const current = menuRows[i];
      const name = $(current).find('td')
        .text()
        .trim();

      if (name.toLowerCase() === today) {
        dayFound = true;
      }

      if (name === location && dayFound === true) {
        locationFound = true;
      }

      if (name === locationAfter) {
        dayFound = false;
        locationFound = false;
      }

      if (dayFound === true && locationFound === true && name !== location) {
        super.addToMenu(name);
      }
    }
  }
}
