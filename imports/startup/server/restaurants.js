import { Meteor } from 'meteor/meteor';
import { Restaurants } from '/imports/api/restaurants.js';
import { restaurants } from '/imports/loaders';

Meteor.startup(() => {
  // Update or insert restaurants
  for (let i = 0; i < restaurants.length; i++) {
    const loader = restaurants[i];
    loader.loadData();
    const menu = loader.menu;

    Restaurants.upsert({
      title: loader.title,
    }, {
      $set: {
        menu,
        latitude: loader.latitude,
        longitude: loader.longitude,
      },
    });
  }
});
