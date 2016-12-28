import Vue from 'vue'
import $ from 'jquery'

// Kinda "hack" to import bs.
window.Tether = require("tether");
require('../../../node_modules/bootstrap/dist/js/bootstrap.js');

new Vue({
  el: "#app",
  render: (h) => h(require('./app.vue'))
})
