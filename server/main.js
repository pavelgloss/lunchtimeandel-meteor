import { Meteor } from 'meteor/meteor';
import { Restaurants } from '../imports/api/restaurants.js';
import { HomeOffice } from '../imports/loaders/HomeOffice.js';
import { Tradice } from '../imports/loaders/Tradice.js';
import { IlNostro } from '../imports/loaders/IlNostro.js';

Meteor.startup(() => {
    HomeOffice.menu = [];
    HomeOffice.loadData();
    menu = HomeOffice.menu;

    restaurant = {
        title: "HomeOffice",
        menu: menu,
        latitude: HomeOffice.latitude,
        longitude: HomeOffice.longitude
    };

    console.log("HomeOffice loaded");

    Restaurants.update('DAwHA9tZb97ZTfSkX', restaurant);


    Tradice.menu = [];
    Tradice.loadData();
    menu = Tradice.menu;

    restaurant = {
        title: "Tradice",
        menu: menu,
        latitude: Tradice.latitude,
        longitude: Tradice.longitude
    };

    console.log("Tradice loaded");

    Restaurants.update('kLRwYuWMYWimQMwa6', restaurant);


    IlNostro.menu = [];
    IlNostro.loadData();
    menu = IlNostro.menu;

    restaurant = {
        title: "IlNostro",
        menu: menu,
        latitude: IlNostro.latitude,
        longitude: IlNostro.longitude
    };

    console.log("IlNostro loaded");

    Restaurants.insert(restaurant);
});
