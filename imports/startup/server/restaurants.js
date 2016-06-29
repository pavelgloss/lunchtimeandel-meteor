import { Meteor } from 'meteor/meteor';
import { Restaurants } from '/imports/api/restaurants.js';
import { HomeOffice } from '/imports/loaders/HomeOffice.js';
import { Tradice } from '/imports/loaders/Tradice.js';
import { IlNostro } from '/imports/loaders/IlNostro.js';

Meteor.startup(() => {
  let loader = new HomeOffice();
  loader.menu = [];
  loader.loadData();
  let menu = loader.menu;

  let restaurant = {
    title: 'HomeOffice',
    menu,
    latitude: loader.latitude,
    longitude: loader.longitude,
  };

  Restaurants.update('peZFXo4Zm9FsfpMhD', restaurant);


  loader = new Tradice();
  loader.menu = [];
  loader.loadData();
  menu = loader.menu;

  restaurant = {
    title: 'Tradice',
    menu,
    latitude: loader.latitude,
    longitude: loader.longitude,
  };

  Restaurants.update('gBibtNL36SdLE938w', restaurant);


  loader = new IlNostro();
  loader.menu = [];
  loader.loadData();
  menu = loader.menu;

  restaurant = {
    title: 'IlNostro',
    menu,
    latitude: loader.latitude,
    longitude: loader.longitude,
  };

  Restaurants.update('yzKd6v7Kwt6EGMKn9', restaurant);
});
