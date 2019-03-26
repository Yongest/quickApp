(function(){
  
  var manifestJson = {"name":"blue","package":"me.zce.locally","versionName":"1.0.1","versionCode":"2","minPlatformVersion":"101","icon":"/Common/icon.png","features":[{"name":"system.fetch"},{"name":"system.prompt"},{"name":"system.shortcut"},{"name":"system.storage"},{"name":"system.webview"},{"name":"system.share"}],"permissions":[{"origin":"*"}],"config":{"designWidth":"750","data":{"description":"在北京生活，吃喝玩乐去哪儿~","author":{"text":"https://yongest.github.io","link":"https://yongest.github.io"},"license":{"text":"MIT","link":"https://yongest.github.io"}},"logLevel":"debug"},"router":{"entry":"Home","pages":{"Home":{"component":"index"},"Explore":{"component":"index"},"Detail":{"component":"index"},"Message":{"component":"index"},"Profile":{"component":"index"},"Setting":{"component":"index"},"About":{"component":"index"}}},"display":{"titleBar":true,"titleBarText":"blue","titleBarTextColor":"#ffffff","titleBarBackgroundColor":"#15aabf","backgroundColor":"#f1f3f5","fullScreen":false,"menu":false,"pages":{"Home":{"menu":true},"Explore":{"titleBar":false},"Detail":{"titleBarText":"店铺详情","menu":true},"Profile":{"titleBarText":"个人中心"},"Setting":{"titleBarText":"设置"},"About":{"titleBarText":"关于","backgroundColor":"#ffffff"}}}}
  var createAppHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.ux?uxType=app");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/common/loader/manifest-loader.js?path=D:\\github\\quickApp\\blue\\src!./node_modules/babel-loader/lib/index.js?cwd=D:\\github\\quickApp\\blue&comments=false!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/common/loader/manifest-loader.js?path=D:/github/quickApp/blue/src!./node_modules/babel-loader/lib?cwd=D:/github/quickApp/blue&comments=false!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.fetch"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.storage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getCache = function getCache(key) {
  return new Promise(function (resolve, reject) {
    _system2.default.get({
      key: key,
      success: function success(data) {
        if (!data) return reject();

        try {
          data = JSON.parse(data);

          if (!data.expires || data.expires < Date.now()) {
            _system2.default.delete({
              key: key
            });

            return reject();
          }

          resolve(data.value);
        } catch (e) {
          reject();
        }
      },
      fail: function fail() {
        reject();
      }
    });
  });
};

var setCache = function setCache(key, value, expires) {
  return new Promise(function (resolve, reject) {
    _system2.default.set({
      key: key,
      value: JSON.stringify({
        value: value,
        expires: Date.now() + expires
      }),
      success: resolve,
      fail: reject
    });
  });
};

var _default = {
  fetch: function fetch(url, params) {
    if (!url.startsWith('http')) {
      url = 'https://locally.uieee.com' + url;
    }

    return new Promise(function (resolve, reject) {
      _system.default.fetch({
        url: url,
        data: params,
        success: function success(res) {
          try {
            resolve(JSON.parse(res.data));
          } catch (e) {
            resolve(res.data);
          }
        },
        fail: reject
      });
    });
  },
  fetchSlides: function fetchSlides() {
    return this.fetch('/slides');
  },
  fetchCategories: function fetchCategories() {
    var _this = this;

    return getCache('categories').then(function (cache) {
      console.log('resolve categories from cache');
      return cache;
    }).catch(function () {
      return _this.fetch('/categories').then(function (data) {
        console.log('resolve categories from remote');
        setCache('categories', data, 10 * 60 * 1000);
        return data;
      });
    });
  },
  fetchShops: function fetchShops(cat, page, query) {
    var params = {
      _page: page,
      _limit: 20
    };
    if (query) params.q = query;
    return this.fetch("/categories/".concat(cat, "/shops"), params);
  },
  fetchShop: function fetchShop(id) {
    return this.fetch("/shops/".concat(id));
  }
};
exports.default = _default;}

/***/ }),

/***/ "./src/app.ux?uxType=app":
/*!*******************************!*\
  !*** ./src/app.ux?uxType=app ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_script$ = __webpack_require__(/*! !../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!../node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!../node_modules/hap-toolkit/packager/lib/dsl/common/loader/manifest-loader.js?path=D:/github/quickApp/blue/src!../node_modules/babel-loader?cwd=D:/github/quickApp/blue&comments=false!../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./app.ux?uxType=app */ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/common/loader/manifest-loader.js?path=D:\\github\\quickApp\\blue\\src!./node_modules/babel-loader/lib/index.js?cwd=D:\\github\\quickApp\\blue&comments=false!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app")

$app_define$('@app-application/app', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default;
        }
     $app_module$.exports['manifest'] = manifestJson;
})

$app_bootstrap$('@app-application/app',{ packagerVersion: '0.0.5'})


/***/ })

/******/ });
  };
  if (typeof window === "undefined") {
    return createAppHandler();
  }
  else {
    window.createAppHandler = createAppHandler
    // H5注入manifest以获取features
    global.manifest = manifestJson;
  }
})();
//# sourceMappingURL=app.js.map