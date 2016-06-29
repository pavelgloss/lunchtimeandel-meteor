import { Meteor } from 'meteor/meteor';
import { Restaurants } from '../imports/api/restaurants.js';
import { HomeOffice } from '../imports/loaders/HomeOffice.js';

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
});
