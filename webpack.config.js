const path = require('path');

module.exports = {
	entry: path.resolve(__dirname, 'src/index.js'),
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js'
	},
  	resolve: {
  		root: __dirname,
  		alias: {
			Main: 'src/components/Main.js',
			SignIn: 'src/components/SignIn.js',
			SignUp: 'src/components/SignUp.js',			
			SubmitRecipe: 'src/components/SubmitRecipe.js',
			TopNavbar: 'src/components/TopNavbar.js',
			Welcome: 'src/components/Welcome.js',
  		},
  		extensions: ['', '.js', '.jsx']
  	},
  	module: {
  		loaders: [
  			{
  				test: /\.jsx?$/,
  				include: /app/,
		        loader: "babel",
		        query: {
		        	presets: ["react", "es2015", "stage-0"]
		        }
		    }
		]
	},
	devtool: "eval-source-map"
};