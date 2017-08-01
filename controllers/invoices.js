const models = require('../models');

exports.index = (req, res) => {
  models.Invoices.findAll()
  then((invoices_ => {
      res.render('home/index', {invoices});
  }));
}
exports.getOne = (req, res) => {
  models.Invoices.findOne({
    where: {
      id: req.params.invoiceId
    },
    include: [models.Items]
  }).then((invoice) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(invoice);
  });
}
exports.updateOne = (req, res) => {
  models.Invoices.findOne({
    where: {
      id: req.params.invoiceId
    },
    include: [models.Items]
  }).then((invoice) => {
    invoice.updateAttributes()
    res.setHeader('Content-Type', 'application/json');
    res.send(invoice);
  });
}
exports.createOne = (req, res) => {
  models.Invoices.create(req.body)
  .then(
    createdInvoice => {
      res.setHeader('Content-Type', 'application/json');
      res.send(createdInvoice);
    }
  )
}

exports.deleteOne = (req, res) => {
  models.Invoices.destroy({
    where: {
      id: req.params.invoiceId
    }
  }).then(deletedInvoice => {
    console.log("Deleting invoice with id = ${req.params.invoiceId}. Result = ${deletedInvoice}");
    res.setHeader('Content-Type', 'application/json');
    res.send(deletedInvoice);
  })
}
