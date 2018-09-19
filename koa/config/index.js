const devConfig = require('./config.dev');
const prodConfig = require('./config.dev');

const isProd = process.env.NODE_ENV === 'production';

module.exports = isProd ? prodConfig : devConfig;