var Vue = require('vue')
var Resource = require('vue-resource')
var Router = require('vue-router')
var App = require('./component/App.vue')

Vue.config.debug = true

// install vue resource
Vue.use(Resource)
Vue.http.options.root = '/api'

// install vue router
Vue.use(Router)

// routing
var router = new Router()

router.map({
  '/': {
    component: require('./component/ProfileView.vue')
  },
  '/pool': {
    component: require('./component/StocksView.vue')
  },
  '/history': {
    component: require('./component/HistoryView.vue')
  }
})

router.redirect({
  '*': '/'
})

router.start(App, '#app')