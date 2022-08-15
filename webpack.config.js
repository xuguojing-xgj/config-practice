const path = require('path')

// 配置webpack 
const HTMLWebpackPlugin = require('html-webpack-plugin')
// 引入clean 作用清除dist 文件目录
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
    // 指定入口文件
    entry: './src/index.ts',
    // 指定打包后的出口文件
    output: {
        // 指定打包文件目录
        /**
         * 1. __dirname 可以用来动态获取当前文件所属目录的绝对路径
         * 2. __filename 可以用来动态获取当前文件的绝对路径，包含当前文件
         */
        path: path.resolve(__dirname, 'dist'),
        // 打包后在dist 生成文件
        filename: 'bundle.js',
        /**
         * 在ie11中 打包后的箭头函数不能被识别
         * 需要配置environment 告诉webpack
         * 不使用 打包后 不使用箭头函数
         */
        environment: {
            arrowFunction: false,
        }
    },
    mode: 'development',
    module: {
        rules: [
            {
                // 指定以什么结尾处理文件
                test: /\.ts$/,
                // 用什么处理ts文件
                use: [
                    // 配置babel
                    {
                        // 指定加载器
                        loader: 'babel-loader',
                        options: {
                            // 设置预定义的环境
                            presets: [
                                [
                                    // 指定环境插件
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        // 代码要运行到什么浏览器
                                        targets: {
                                            // 兼容到浏览器什么版本
                                            "chrome": "58",
                                            "ie": "11"
                                        },
                                        // 指定corejs版本
                                        "corejs": "3",
                                        // 使用corejs方式 usage 按需加载
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'
                ],
                // 要排除的文件
                exclude: /node_modules/
            },
            // 设置less 文件处理
            {
                test: /\.less$/,
                // use 执行顺序是按从下到上执行
                use: [
                    'style-loader',
                    'css-loader',
                    // 引入postcss 解决样式兼容低版本浏览器 核心问题
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        'postcss-preset-env',
                                        {
                                            // 兼容最新的2个浏览器
                                            browsers:'last 2 versions'
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    'less-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            // title: '自定义title'
            // 打包时 使用的模板
            template: './src/index.html'
        })
    ],
    // 用来设置引用模块
    resolve: {
        extensions: ['.ts', '.js']
    }
}