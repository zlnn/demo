const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
	entry: {
		index: './src/js/index.js'


	},
	output: {
		path: __dirname + "/public",
		filename: "./js/[name].js"
	},
	devServer: {
		contentBase: "./public", //本地服务器所加载的页面所在的目录 
		inline: true //实时刷新
	},
	module: {
		rules: [{
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				fallback: "style-loader",
				use: "css-loader",
				   publicPath:'../'
					
				
			})
		}, {
			test: /\.(png|jpg|gif|jpeg)$/,
			use: [{
				loader: 'url-loader?limit=8192&name=./img/[hash:8].[name].[ext]'
			}]
		}, {　　　　　　
			test: /\.html$/,
			　　　　　　loader: 'html-withimg-loader'　　　　
		}]
	},
	plugins: [
		new ExtractTextPlugin("./css/[name].css"),
		new HtmlWebpackPlugin({
			template: __dirname + "/src/index.html",
			filename: './index.html',
			chunks: ['index'],
				minify: { //压缩HTML文件    
			    removeAttributeQuotes: true, // 移除属性的引号
                caseSensitive: false, //是否大小写敏感
                removeComments:true, // 去除注释
                removeEmptyAttributes:true, // 去除空属性
                collapseWhitespace: true //是否去除空格
						}
		})
	
	]
}