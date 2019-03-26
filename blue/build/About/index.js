(function(){
  
  var createPageHandler = function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/About/index.ux?uxType=page");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./src/About/index.ux?uxType=page":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./src/About/index.ux?uxType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".about-page": {
    "flexDirection": "column",
    "alignItems": "center"
  },
  ".icon": {
    "marginTop": "90px",
    "width": "150px",
    "height": "150px",
    "borderRadius": "15px",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#ced4da",
    "borderRightColor": "#ced4da",
    "borderBottomColor": "#ced4da",
    "borderLeftColor": "#ced4da"
  },
  ".name": {
    "marginTop": "30px",
    "fontSize": "46px",
    "color": "#495057"
  },
  ".tags": {
    "marginTop": "30px",
    "alignItems": "center"
  },
  ".tag": {
    "paddingTop": "0px",
    "paddingRight": "15px",
    "paddingBottom": "0px",
    "paddingLeft": "15px",
    "fontSize": "28px",
    "color": "#40c057"
  },
  ".gap": {
    "fontSize": "20px",
    "color": "#ced4da"
  },
  ".description": {
    "width": "620px",
    "marginTop": "40px",
    "lineHeight": "35px",
    "fontSize": "25px",
    "textAlign": "center",
    "color": "#868e96"
  },
  ".detail": {
    "flexDirection": "column",
    "width": "630px",
    "marginTop": "50px",
    "borderTopWidth": "1px",
    "borderTopColor": "#f1f3f5"
  },
  ".detail .item": {
    "height": "90px",
    "borderBottomWidth": "1px",
    "borderBottomColor": "#f1f3f5",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "detail"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "item"
        }
      ]
    }
  },
  ".detail .title": {
    "width": "160px",
    "paddingLeft": "10px",
    "fontSize": "25px",
    "color": "#343a40",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "detail"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "title"
        }
      ]
    }
  },
  ".detail .content": {
    "fontSize": "25px",
    "color": "#868e96",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "detail"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "content"
        }
      ]
    }
  },
  ".btn": {
    "width": "500px",
    "height": "80px",
    "marginTop": "100px",
    "borderRadius": "100px",
    "backgroundColor": "#15aabf",
    "fontSize": "30px",
    "color": "#ffffff"
  },
  ".copyright": {
    "width": "750px",
    "position": "fixed",
    "bottom": "70px",
    "fontSize": "25px",
    "textAlign": "center",
    "color": "#dee2e6"
  },
  ".tips": {
    "width": "750px",
    "position": "fixed",
    "bottom": "15px",
    "lineHeight": "35px",
    "fontSize": "25px",
    "textAlign": "center",
    "color": "#e9ecef"
  }
}

/***/ }),

/***/ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./src/About/index.ux?uxType=page&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./src/About/index.ux?uxType=page& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "about-page"
  ],
  "children": [
    {
      "type": "image",
      "attr": {
        "src": function () {return this.icon}
      },
      "classList": [
        "icon"
      ]
    },
    {
      "type": "text",
      "attr": {
        "value": function () {return this.name}
      },
      "classList": [
        "name"
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "tags"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": "无安装"
          },
          "classList": [
            "tag"
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": "|"
          },
          "classList": [
            "gap"
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": "体积小"
          },
          "classList": [
            "tag"
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": "|"
          },
          "classList": [
            "gap"
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": "一步直达"
          },
          "classList": [
            "tag"
          ]
        }
      ]
    },
    {
      "type": "text",
      "attr": {
        "value": function () {return this.description}
      },
      "classList": [
        "description"
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "detail"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "item"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "服务类型"
              },
              "classList": [
                "title"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": "生活类"
              },
              "classList": [
                "content"
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "item"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "主体信息"
              },
              "classList": [
                "title"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": "WEDN.NET"
              },
              "classList": [
                "content"
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "item"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "源码"
              },
              "classList": [
                "title"
              ]
            },
            {
              "type": "text",
              "attr": {},
              "classList": [
                "content"
              ],
              "children": [
                {
                  "type": "a",
                  "attr": {
                    "href": "https://github.com/zce/quickapp-locally",
                    "value": "https://github.com/zce/quickapp-locally"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "创建快捷方式"
      },
      "classList": [
        "btn"
      ],
      "events": {
        "click": "createShortcut"
      }
    },
    {
      "type": "text",
      "attr": {
        "value": "Copyright © WEDN.NET"
      },
      "classList": [
        "copyright"
      ]
    },
    {
      "type": "text",
      "attr": {
        "value": "即点即用，让你省去下载安装的步骤，立即使用各类服务"
      },
      "classList": [
        "tips"
      ]
    }
  ]
}

/***/ }),

/***/ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=D:\\github\\quickApp\\blue&plugins[]=D:\\github\\quickApp\\blue\\node_modules\\hap-toolkit\\packager\\lib\\dsl\\ux\\loader\\babel-plugin-jsx.js&comments=false!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/access-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./src/About/index.ux?uxType=page":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!./node_modules/babel-loader/lib?cwd=D:/github/quickApp/blue&plugins[]=D:/github/quickApp/blue/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/babel-plugin-jsx.js&comments=false!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/access-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./src/About/index.ux?uxType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.app"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.prompt"));

var _system3 = _interopRequireDefault($app_require$("@app-module/system.shortcut"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _default = {
  private: {
    name: '',
    icon: '',
    description: ''
  },
  onInit: function onInit() {
    var appInfo = _system.default.getInfo();

    this.icon = appInfo.icon;
    this.name = appInfo.name;
    this.description = this.$app.$data.description;
  },
  createShortcut: function createShortcut() {
    _system3.default.hasInstalled({
      success: function success(installed) {
        if (installed) {
          return _system2.default.showToast({
            message: '已创建桌面图标'
          });
        }

        _system3.default.install({
          success: function success() {
            _system2.default.showToast({
              message: '成功创建桌面图标'
            });
          },
          fail: function fail(msg, e) {
            _system2.default.showToast({
              message: 'error: ' + e + '---' + msg
            });
          }
        });
      }
    });
  }
};
exports.default = _default;
var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];

if (moduleOwn.data && accessors.some(function (acc) {
  return moduleOwn[acc];
})) {
  throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function (acc) {
    var accType = _typeof(moduleOwn[acc]);

    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);

      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {
          access: acc
        };
      }
    } else if (accType === 'function') {
      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
    }
  });
}}

/***/ }),

/***/ "./src/About/index.ux?uxType=page":
/*!****************************************!*\
  !*** ./src/About/index.ux?uxType=page ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./index.ux?uxType=page& */ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./src/About/index.ux?uxType=page&")
var $app_style$ = __webpack_require__(/*! !../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./index.ux?uxType=page */ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./src/About/index.ux?uxType=page")
var $app_script$ = __webpack_require__(/*! !../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!../../node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!../../node_modules/babel-loader?cwd=D:/github/quickApp/blue&plugins[]=D:/github/quickApp/blue/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/babel-plugin-jsx.js&comments=false!../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/access-loader.js!../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./index.ux?uxType=page */ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=D:\\github\\quickApp\\blue&plugins[]=D:\\github\\quickApp\\blue\\node_modules\\hap-toolkit\\packager\\lib\\dsl\\ux\\loader\\babel-plugin-jsx.js&comments=false!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/access-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./src/About/index.ux?uxType=page")

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})

$app_bootstrap$('@app-component/index',{ packagerVersion: '0.0.5'})


/***/ })

/******/ });
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map