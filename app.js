const express = require('express');
const models = require('./models')
const app = express();

require('./config/express')(app)
require('./config/routes')(app)
models.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Startup app on port 3000');
  });
})


module.exports = {
  app
}
