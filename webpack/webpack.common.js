const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = (env, argv) => {
  return {
    entry: path.resolve(__dirname, '../src/main.tsx'),
    module: {
      rules: [
        {
          test: /\.(png|jpg|jpeg|gif|svg|webp)$/i,
          type: 'asset',
          parser: {
            dataUrlCondition: {
              maxSize: 10 * 1024, // 10kb
            },
          },
          generator: {
            filename: 'assets/images/[name].[hash][ext]',
          },
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/fonts/[name].[hash][ext]',
          },
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx'],
      alias: {
        '@': path.resolve(__dirname, '../src'),
		'@components': path.resolve(__dirname, '../src/components'),
		'@utils': path.resolve(__dirname, '../src/utils'),
		'@assets': path.resolve(__dirname, '../src/assets'),
		'@styles': path.resolve(__dirname, '../src/styles'),
		'@hooks': path.resolve(__dirname, '../src/hooks'),
		'@services': path.resolve(__dirname, '../src/services'),
		'@constants': path.resolve(__dirname, '../src/constants'),
		'@contexts': path.resolve(__dirname, '../src/contexts'),
		'@layouts': path.resolve(__dirname, '../src/layouts')
      },
    },
    plugins: [new CleanWebpackPlugin()],
    stats: {
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false,
    },
    performance: {
      hints: false,
    },
  }
}
