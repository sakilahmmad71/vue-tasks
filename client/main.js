import { Meteor } from 'meteor/meteor';
import Vue from 'vue';
import VueMeteorTracker from 'vue-meteor-tracker';

// import '../imports/ui/plugins'
import App from '../imports/ui/App.vue';
import '../imports/startup/accounts-config.js';

Vue.use(VueMeteorTracker);

Meteor.startup(() => {
  new Vue({
    el: '#app',
    ...App,
  })
})
