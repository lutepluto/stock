<style>
html {
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

html, body {
  margin: 0;
  padding: 0;
  font-size: 14px;
  line-height: 1.4;
}

h1, h2, h3, p {
  margin: 0;
  padding: 0;
}

small {
  font-size: 80%;
}
</style>

<template>
  
  <div id="#app">
    <property-view></property-view>
    <profile-view></profile-view>
  </div>

</template>

<script>
'use strict'

var ProfileView = require('./component/profile.vue')
var PropertyView = require('./component/property.vue')

module.exports = {
  components: {
    ProfileView,
    PropertyView
  }
}

</script>