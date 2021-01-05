module.exports = {
  configureWebpack: {
    //    @路径走src文件夹
    module: {
      rules: [
        {
          test: /\.swf$/,
          loader: "url-loader",
          options: {
            limit: 10000,
            name: "static/media/[name].[hash:7].[ext]",
          },
        },
      ],
    },
  },
};
