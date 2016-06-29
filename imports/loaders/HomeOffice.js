const cheerio = require('cheerio');

export class HomeOffice {
  constructor() {
    this.longitude = 14.4011792;
    this.latitude = 50.0716481;
  }

  addToMenu(name, price = '') {
    this.menu.push({
      food: name,
      price,
    });
  }

  loadData() {
    const today = moment().format('dddd D/M');
    const location = 'Radlická';
    const locationAfter = 'Butovice';
    let dayFound = false;
    let locationFound = false;
    const $ = cheerio.load(Meteor.http.get('http://homeofficebistro.cz/tydenni-menu/').content);

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
        this.addToMenu(name);
      }
    }
  }
}
