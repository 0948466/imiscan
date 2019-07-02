module.exports = {
  configureWebpack: () => ({
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
          use: [
            /* config.module.rule('images').use('url-loader') */
            {
              loader: 'url-loader',
              options: {
                limit: 62096,
                fallback: {
                  loader: 'file-loader',
                  options: {
                    name: 'img/[name].[hash:8].[ext]',
                  },
                },
              },
            },
          ],
        },
      ],
    },
  }),

  chainWebpack: (config) => {
    config.module
      .rule('images')
      .test(() => false)
      .use('url-loader');
  },
  css: {
    loaderOptions: {
      // передача настроек в sass-loader
      sass: {
        // @/ это псевдоним к каталогу src/ поэтому предполагается,
        // что у вас в проекте есть файл `src/variables.scss`
        data: '@import "~@/scss/variables.scss";',
      },
    },
  },
};
