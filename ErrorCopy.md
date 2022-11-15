
> webpack-initial@1.0.0 build
> webpack --config webpack.config.js

assets by chunk 27.7 KiB (name: main)
asset main.js 27.4 KiB [emitted] (name: main)
asset style.css 298 bytes [emitted] (name: main)
asset assets/img/webpacklogo.png 141 KiB [emitted] [from: src/assets/img/webpacklogo.png] [copied]
# ESTE DE DONDE SALIÓ? -> asset c5f330684718b933c1e1c43c1e8d8a31.png 141 KiB [emitted] [immutable] [from: src/assets/img/webpacklogo.png] (auxiliary name: main)
asset index.html 418 bytes [emitted]
Entrypoint main 27.7 KiB (141 KiB) = style.css 298 bytes main.js 27.4 KiB 1 auxiliary asset
runtime modules 2.93 KiB 11 modules
orphan modules 511 bytes [orphan] 1 module
javascript modules 10.3 KiB
modules by path ./node_modules/ 8.06 KiB
modules by path ./node_modules/style-loader/dist/runtime/*.js 5.75 KiB 6 modules
modules by path ./node_modules/css-loader/dist/runtime/*.js 2.31 KiB
./node_modules/css-loader/dist/runtime/noSourceMaps.js 64 bytes [built] [code generated] [buildtime executed]./node_modules/css-loader/dist/runtime/api.js 2.25 KiB [built] [code generated] [build time executed]
modules by path ./src/ 2.26 KiB
modules by path ./src/css/*.css 1.64 KiB 3 modules
./src/index.js 114 bytes [built] [code generated]
./src/js/components.js 437 bytes [built] [code generated]
./src/assets/img/webpacklogo.png 80 bytes [built] [code generated]
css ./node_modules/css-loader/dist/cjs.js!./src/css/style.css 73 bytes [built] [code generated]
webpack 5.75.0 compiled successfully in 1032 ms
