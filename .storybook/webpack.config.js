// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add addional webpack configurations.
// For more information refer the docs: https://getstorybook.io/docs/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
// var webpackConfig = require('./../webpack.config');

var webpackConfig = require('./../webpack.config');

delete webpackConfig.entry;
delete webpackConfig.output.filename;
delete webpackConfig.output.sourceMapFilename;
delete webpackConfig.output.libraryTarget;
delete webpackConfig.externals;

module.exports = webpackConfig;
