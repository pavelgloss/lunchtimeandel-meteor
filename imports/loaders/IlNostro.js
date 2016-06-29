let cheerio = require("cheerio");

class IlNostroLoader {
    addToMenu(name, price = '') {
        this.menu.push({
            food: name,
            price: price
        });
    }

    loadData() {
        let today = moment().day();
        let $ = cheerio.load(Meteor.http.get('http://www.ilnostro.cz/cz/tydenni-menu').content);
        let loader = this;

        $('.obsah table').each(function(i, elem) {
            if (i + 1 === today) {
                $(this).find('tr').each(function(i, elem) {
                    let name = $(this).find('td').eq(1).text().trim();
                    let price = $(this).find('td').last().text().trim();
                    loader.addToMenu(name, price);
                });
            }
        });
    }
}

IlNostro = new IlNostroLoader();
IlNostro.longitude = 14.400603;
IlNostro.latitude = 50.071509;

export var IlNostro;
