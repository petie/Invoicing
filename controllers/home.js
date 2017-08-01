exports.index = (req, res) => {
  models.Invoice.findAll().then((invoices) => {
      res.render('home/index', {invoices});
  });
}
