'use strict'

var gulp = require('gulp'),
  $ = require('gulp-load-plugins')()


gulp.task('connect', function() {
  $.connect.server({
    port: 8080,
    root: './',
    livereload: true,
    middleware: function(connect, opt) {
      return [(function() {
        var url = require('url')
        var proxy = require('proxy-middleware')
        var options = url.parse('http://localhost:8888')
        options.route = '/api'
        return proxy(options)
      }())]
    }
  })
})

var jsonServer = require('json-server')

gulp.task('mock', ['connect'], function() {
  var server = jsonServer.create()
  server.use(jsonServer.defaults())
  server.use(jsonServer.router('test/db.json'))
  server.listen(8888)
})
