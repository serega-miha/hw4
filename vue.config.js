const path = require('path')

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    proxy: {
      ['/api']: {
				target: 'http://45.12.239.156:8081',
				pathRewrite: {
					['^/api']: ['/api']
				},
				changeOrigin: true,
				secure: false
			},
    }
  },
  pluginOptions: { // Это объект, который можно использовать для передачи произвольных параметров сторонним плагинам.
    svgSprite: {  // указываем название правила
      dir: './src/assets/icons', // папка в которой находятся иконки
      test: /\.svg$/, // название файла заканчивается на .svg
      loaderOptions: { // опции загрузки (импорта)
        extract: false, // опция позволяет указать нужно ли создавать отдельный файл или оставить в js
      },
    },
    'style-resources-loader': {
      'preProcessor': 'scss',
      'patterns': [
        path.resolve(__dirname, './src/scss/inject.scss'),
      ]
    } 
  }, 
  // chainWebpack: config => { // позволяет модифицировать внутреннюю конфигурацию webpack
  //   config.module // обращаемся к опции хранящей настройки для загрузки (импорта) модулей
  //       .rule('svg-sprite') // название правила
  //       .use('svg-sprite-loader') // название плагина который будет запускать загрузчики
  //       .loader('svg-sprite-loader'); // название загручика
  // },
  chainWebpack: (config) => {
    config.module
      .rule("svg-sprite")
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader");
  },
  runtimeCompiler: true //позволяет использовать не предварительно скомпилированные шаблоны Vue.
})