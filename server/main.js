import { Meteor } from 'meteor/meteor';
import { Restaurants } from '../imports/api/restaurants.js';
import { HomeOffice } from '../imports/loaders/HomeOffice.js';

Meteor.startup(() => {
    HomeOffice.menu = [];
    HomeOffice.loadData();
    menu = HomeOffice.menu;

    restaurant = {
        title: "HomeOffice",
        menu: menu
    };

    console.log("HomeOffice loaded");

    Restaurants.update('zNYsWYsfqpY8HFL5K', restaurant);
});
