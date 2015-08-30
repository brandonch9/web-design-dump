'use strict';

module.exports = function(router) {
  router.get('/', function (req, res) {
    res.render('index.html')
  })

  router.get('/landing', function (req, res) {
    res.render('index.html')
  })

  router.get('/flexbox-grid', function (req, res) {
    res.render('flexbox-grid.html')
  })

  router.get('/parallax-landing', function (req, res) {
    res.render('parallax-landing.html')
  })

  router.get('/parallax-header', function (req, res) {
    res.render('parallax-header.html')
  })

  router.get('/supreme', function (req, res) {
    res.render('supreme.html')
  })

  router.get('/kawakubo', function (req, res) {
    res.render('kawakubo.html')
  })

  router.get('*', function (req, res) {
    res.send('Sorry, this page does not exist.')
  })
}