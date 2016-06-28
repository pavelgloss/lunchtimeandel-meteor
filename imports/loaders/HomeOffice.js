let cheerio = require("cheerio");

class HomeOfficeLoader {
    addToMenu(name, price = '') {
        this.menu.push({
            food: name,
            price: price
        });
    }

    loadData() {
        let today = moment().format('dddd D/M');
        let location = 'Radlická';
        let locationAfter = 'Butovice';
        let dayFound = false;
        let locationFound = false;
        let $ = cheerio.load(Meteor.http.get('http://homeofficebistro.cz/tydenni-menu/').content);

        menuRows = $('table tr');

        for (let i = 0; i < menuRows.length; i++) {
            let current = menuRows[i];
            name = $(current).find('td').text().trim();

            if (name.toLowerCase() == today) {
               dayFound = true;
            }

            if (name == location && dayFound == true) {
                locationFound = true;
            }

            if (name == locationAfter) {
                dayFound = false;
                locationFound = false;
            }

            if (dayFound == true && locationFound == true && name != location) {
                this.addToMenu(name);
            }
        }
    }
}

export const HomeOffice = new HomeOfficeLoader();
