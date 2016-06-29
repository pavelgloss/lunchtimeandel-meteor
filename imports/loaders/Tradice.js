let cheerio = require("cheerio");

class TradiceLoader {
    addToMenu(name, price = '') {
        this.menu.push({
            food: name,
            price: price
        });
    }

    loadData() {
        let today = moment().day();
        let $ = cheerio.load(Meteor.http.get('http://www.tradiceandel.cz/cz/denni-nabidka/').content);
        let loader = this;

        $('.separator-section').each(function(i, elem) {
            if (i + 1 === today) {
                $(this).find('.item').each(function(i, elem) {
                    let name = $(this).find('div').first().text().trim();
                    let price = $(this).find('div').last().text().trim().replace(',-', ' Kč');
                    loader.addToMenu(name, price);
                });
            }
        });
    }
}

Tradice = new TradiceLoader();
Tradice.longitude = 14.401515;
Tradice.latitude = 50.06924;

export var Tradice;
