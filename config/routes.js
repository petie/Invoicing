'use strict';

const home = require('../controllers/home');
const invoices = require('../controllers/invoices')
module.exports = (app) => {
  app.get('/', home.index);
  app.get('/invoices', invoices.index);
  app.get('/invoices/:invoiceId', invoices.getOne);
  app.post('/invoices/:invoiceId/update', invoices.updateOne);
  app.post('/invoices/create', invoices.createOne);
  app.post('/invoices/:invoiceId/delete', invoices.deleteOne);
}
