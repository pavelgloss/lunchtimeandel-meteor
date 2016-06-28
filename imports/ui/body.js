import { Template } from 'meteor/templating';
import { Restaurants } from '../api/restaurants.js';
 
import './body.html';
 
Template.body.helpers({
    restaurants() {
        return Restaurants.find({});
    }
});
