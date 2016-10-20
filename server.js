// jshint esversion:6
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.config');
const printscreen = require('printscreen');

require('dotenv').config({ silent: true });

const PORT = process.env.PORT || 8000;
const app = express();
const compiler = webpack(webpackConfig);
var server = require('http').Server(app);

// 3RD PARTY MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

// GENERAL MIDDLEWARE

// WEBPACK CONFIG
app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath, noInfo: true
}))

app.use(webpackHotMiddleware(compiler))

// ERROR CHECKING
app.use((req, res, next) => {
  res.hasError = (err, data) => res.status(err ? 400 : 200).send(err || data);
  next();
});

// ROUTES
app.use('/search', require('./routes/search'));
// app.use('/managefavorites', require('./routes/favoriteRoutes'));

// ALLOW REACT ROUTING
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

// SERVER LISTEN
app.listen(PORT, (err) => {
  console.log(err || `Express listening on port ${PORT}`);
});
