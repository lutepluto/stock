'use strict'

var Vue = require('vue')
var App = require('./app.vue')

Vue.config.debug = true

Vue.use(require('vue-resource'))
Vue.http.options.root = '/api'

new Vue({
  el: 'body',
  data: {
    title: 'Stock...'
  },
  components: {
    app: App
  }
})