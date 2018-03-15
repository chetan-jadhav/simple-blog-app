var express = require('express'),
  app = express(),
  port = process.env.PORT || 3001,
  bodyParser = require('body-parser'),
  logger = require('morgan'),
  models = require('./api/models');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));

// Require all routes into application
require('./api/routes')(app);


models.sequelize
  .sync()
  .then(() => {
      app.listen(port, () => {
          console.log("Blog API server started on port:" + port);
      });
  })
