const paths = require('../config/paths');
const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const app = require(paths.appServer);

const config = require('../config/webpack.config.dev');
const compiler = webpack(config);

const devServer = app.use(middleware(compiler, {
	publicPath: config.output.publicPath,
	hot: true
}))

app.listen(9090, err => {
	console.log('GO GO POWER RANGERS!')
})