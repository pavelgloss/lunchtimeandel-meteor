import { Template } from 'meteor/templating';
import { Restaurants } from '../api/restaurants.js';

import './body.html';

Template.body.helpers({
  restaurants() {
    return Restaurants.find({});
  },
});

Template.restaurant.helpers({
  isWeekend() {
    const today = (new Date()).getDay();
    return today === 6 || today === 0;
  },
});
