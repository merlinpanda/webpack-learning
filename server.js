const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

app.use(
	webpackDevMiddleware(compiler, {
		publicPath: config.output.publicPuth,
	})
);

app.listen(4000, function () {
	console.log('This server is running http://localhost:4000\n');
})