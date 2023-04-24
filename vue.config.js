const { defineConfig } = require("@vue/cli-service");
const { VantResolver } = require("unplugin-vue-components/resolvers");
const ComponentsPlugin = require("unplugin-vue-components/webpack");
module.exports = defineConfig({
    transpileDependencies: true,
    // publicPath: "./", //可修改 index.html访问资源的路径 ，这样就 可以在 public 文件中 找到 index.html 双击访问 浏览页面了
    // configureWebpack是vant需要导入的文件
    publicPath: "./", // 可以设置成相对路径，这样所有的资源都会被链接为相对路径，打出来的包可以被部署在任意路径
    outputDir: "dist", //打包时生成的生产环境构建文件的目录
    assetsDir: "public", // 放置生成的静态资源 (js、css、img、fonts)
    parallel: false,
    configureWebpack: {
        plugins: [
            ComponentsPlugin({
                resolvers: [VantResolver()],
            }),
        ],
    },
    devServer: {
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
        // 中转服务器
        proxy: {
            // ws: false,
            //通过代理实现跨域
            // 所有的/path都会替换成 http://localhost:3000
            // "/path": {
            //     target: "https://music.163.com", //表示我要替换的服务端地址
            //     changeOrigin: true, //开启代理，允许跨域
            //     rewrite: (path) => path.replace(/^\/path$/, ""), //设置重写路径
            // },
        },
    },
});
