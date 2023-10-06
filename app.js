const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const compiler = webpack(webpackConfig);

const basename = '/griselda';

app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.get(`${basename}/`, (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get(`${basename}/food`, (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get(`${basename}/finance`, (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(3000, () => {
  console.log('Express server is listening on port 3000');
})