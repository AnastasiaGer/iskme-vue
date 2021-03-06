const BundleTracker = require("webpack-bundle-tracker");

module.exports = {
    publicPath: "http://0.0.0.0:8080/",
    outputDir: './dist/',

    chainWebpack: config => {
	config.optimization
	    .splitChunks(false)

	config
	    .plugin('BundleTracker')
	    .use(BundleTracker, [{filename: '../frontend/webpack-stats.json'}])

	config.resolve.alias
	    .set('__STATIC__', 'static')

	config.devServer
	    .public('http://0.0.0.0:8080')
	    .port(8080)
	    .hotOnly(true)
	    .watchOptions({
		poll: 1000,
		ignored: /.#|~$/
	    })
	    .https(false)
	    .headers({"Access-Control-Allow-Origin": ["\*"]})
    }
};
