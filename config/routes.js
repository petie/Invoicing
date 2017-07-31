'use strict';

const home = require('../controllers/home');

module.exports = (app) => {
  app.get('/', home.index);
}
