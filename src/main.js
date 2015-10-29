'use strict'

var Vue = require('vue')
var App = require('./app.vue')

new Vue({
  el: 'body',
  data: {
    title: 'Stock...'
  },
  components: {
    app: App
  }
})