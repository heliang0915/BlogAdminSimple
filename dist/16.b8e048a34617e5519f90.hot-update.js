webpackHotUpdate(16,{

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var env = "development" || "development";
var vueEnv = "client" || "client";
var cacheTime = 24 * 60 * 60 * 60 * 1000;
//全局模板文件
var templateName = "template";
var config = {
    development: {
        port: 9100,
        host: 'http://localhost',
        base: "http://localhost:9100",
        api: 'http://localhost:8080',
        // api:'https://www.blogapi.top',
        zimg: {
            host: "www.blogapi.top",
            port: "4869",
            uploadPath: "/upload",
            zImgUpload: "http://www.blogapi.top:4869/upload",
            zImgDelete: "http://www.blogapi.top:4869/admin"
        }
    },
    production: {
        port: 9200,
        host: 'http://localhost',
        base: "https://www.blogadmin.top",
        // base:"http://localhost:9200",
        // api:'http://localhost:8080',
        api: 'https://blogapi.top',
        zimg: {
            host: "www.pimage.top",
            port: "",
            uploadPath: "/upload",
            zImgUpload: "https://www.pimage.top/upload",
            zImgDelete: "https://www.pimage.top/admin"
        }
    }
};

var conf = config[env];
var BaseURL = "/umeditor/";
var editorConfig = {
    //为编辑器实例添加一个路径，这个不能被注释
    UMEDITOR_HOME_URL: BaseURL,
    imageUrl: "/editor/uploadEditor", //图片上传提交地址
    imagePath: "/upload/images/", //图片修正地址，引用了fixedImagePath,如有特殊需求，可自行配置
    imageFieldName: "upfile"
};

var isServer = vueEnv == "server";
var isProd = env != "development";
module.exports = {
    conf: conf, env: env, isProd: isProd, isServer: isServer, cacheTime: cacheTime, templateName: templateName, editorConfig: editorConfig
};

/***/ })

})
//# sourceMappingURL=16.b8e048a34617e5519f90.hot-update.js.map