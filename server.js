'use strict'

const express = require('express'),
      app = express(),
      port = 3000

app
  .set('view engine', 'ejs')
  .set('views', 'views')

  .use(express.static('public'))

  .get('/', homePage)
  .get('/choices', choicesPage)

  .listen(process.env.PORT || port)

function homePage(req, res) {
  res.render('pages/index.ejs')
}

function choicesPage(req, res) {
  res.render('pages/choices.ejs')
}
