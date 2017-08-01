const express = require('express');
const bodyParser = require('body-parser');
module.exports = (app) => {
  app.set('view engine', 'hbs');
  app.use(bodyParser.json());
  //app.engine('html', require('hbs').__express);
}
