module.exports = {
	plugins: [
		require('postcss-import'), // Enables @import syntax
		require('postcss-nested'), // Supports nesting like Sass
		require('postcss-preset-env')({
			stage: 1, // Enables modern CSS features
			autoprefixer: { grid: true }, // Adds vendor prefixes
		}),
		require('autoprefixer'), // Fallback for extra safety
		require('cssnano')({ preset: 'default' }) // Minifies in production
	],
};
