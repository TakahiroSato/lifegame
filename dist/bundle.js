/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@takahiro_sato/canvas2d/dist/canvas2d.js":
/*!***************************************************************!*\
  !*** ./node_modules/@takahiro_sato/canvas2d/dist/canvas2d.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar vec2_1 = __importDefault(__webpack_require__(/*! ./vec2 */ \"./node_modules/@takahiro_sato/canvas2d/dist/vec2.js\"));\r\nexports.vec2 = vec2_1.default;\r\nvar canvas2d = /** @class */ (function () {\r\n    function canvas2d(canvasId) {\r\n        this.canvas = document.getElementById(canvasId);\r\n        var ctx = this.canvas.getContext(\"2d\");\r\n        if (ctx !== null) {\r\n            this.ctx = ctx;\r\n        }\r\n        else {\r\n            throw new Error(\"can't get 2d context.\");\r\n        }\r\n    }\r\n    Object.defineProperty(canvas2d.prototype, \"width\", {\r\n        get: function () {\r\n            return this.canvas.clientWidth;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(canvas2d.prototype, \"height\", {\r\n        get: function () {\r\n            return this.canvas.clientHeight;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    canvas2d.prototype.rotate = function (degree, callback, obj) {\r\n        var _this = this;\r\n        var _a = (function () {\r\n            if (obj !== undefined) {\r\n                return obj;\r\n            }\r\n            else {\r\n                return { x: 0, y: 0, w: _this.width, h: _this.height };\r\n            }\r\n        })(), x = _a.x, y = _a.y, w = _a.w, h = _a.h;\r\n        this.ctx.save();\r\n        this.ctx.beginPath();\r\n        this.ctx.translate(x + w / 2, y + h / 2);\r\n        this.ctx.rotate((degree * Math.PI) / 180);\r\n        callback();\r\n        this.ctx.restore();\r\n    };\r\n    canvas2d.prototype.fillBackground = function (color) {\r\n        this.ctx.fillStyle = color;\r\n        this.ctx.fillRect(0, 0, this.width, this.height);\r\n    };\r\n    canvas2d.prototype.fillRect = function (obj) {\r\n        var _this = this;\r\n        var cx = obj.cx, cy = obj.cy, w = obj.w, h = obj.h, color = obj.color, degree = obj.degree;\r\n        if (color) {\r\n            this.ctx.fillStyle = color;\r\n        }\r\n        if (degree === undefined) {\r\n            this.ctx.fillRect(cx - w / 2, cy - h / 2, w, h);\r\n        }\r\n        else {\r\n            this.rotate(degree, function () {\r\n                _this.ctx.fillRect(-w / 2, -h / 2, w, h);\r\n            }, {\r\n                x: cx - w / 2,\r\n                y: cy - h / 2,\r\n                w: w,\r\n                h: h\r\n            });\r\n        }\r\n    };\r\n    canvas2d.prototype.fillCircle = function (obj) {\r\n        var cx = obj.cx, cy = obj.cy, r = obj.r, color = obj.color;\r\n        this.ctx.beginPath();\r\n        this.ctx.arc(cx, cy, r, 0, 2 * Math.PI, false);\r\n        if (color !== undefined) {\r\n            this.ctx.fillStyle = color;\r\n        }\r\n        this.ctx.fill();\r\n    };\r\n    canvas2d.prototype.drawLines = function (points, obj) {\r\n        var _this = this;\r\n        var _a, _b, _c, _d;\r\n        var _e = (function () {\r\n            if (obj !== undefined) {\r\n                return obj;\r\n            }\r\n            else {\r\n                return {};\r\n            }\r\n        })(), lineWidth = _e.lineWidth, color = _e.color, degree = _e.degree, center = _e.center;\r\n        var _center = new vec2_1.default((_b = (_a = center) === null || _a === void 0 ? void 0 : _a.x, (_b !== null && _b !== void 0 ? _b : 0)), (_d = (_c = center) === null || _c === void 0 ? void 0 : _c.y, (_d !== null && _d !== void 0 ? _d : 0)));\r\n        var pos = points.map(function (p) {\r\n            if (degree) {\r\n                return new vec2_1.default(-(_center.x - p.x), -(_center.y - p.y));\r\n            }\r\n            else {\r\n                return new vec2_1.default(p.x, p.y);\r\n            }\r\n        });\r\n        if (lineWidth !== undefined) {\r\n            this.ctx.lineWidth = lineWidth;\r\n        }\r\n        var _draw = function () {\r\n            _this.ctx.beginPath();\r\n            if (color !== undefined) {\r\n                _this.ctx.strokeStyle = color;\r\n            }\r\n            _this.ctx.moveTo(pos[0].x, pos[0].y);\r\n            pos.shift();\r\n            pos.map(function (p) {\r\n                _this.ctx.lineTo(p.x, p.y);\r\n            });\r\n            _this.ctx.stroke();\r\n        };\r\n        if (degree !== undefined) {\r\n            this.rotate(degree, _draw, {\r\n                x: _center.x,\r\n                y: _center.y,\r\n                w: 0,\r\n                h: 0,\r\n            });\r\n        }\r\n        else {\r\n            _draw();\r\n        }\r\n    };\r\n    canvas2d.prototype.drawText = function (text, x, y, color, size, font) {\r\n        if (color === void 0) { color = \"#ffffff\"; }\r\n        if (size === void 0) { size = 10; }\r\n        if (font === void 0) { font = \"'ＭＳ　Ｐゴシック'\"; }\r\n        this.ctx.font = size + \"pt \" + font;\r\n        this.ctx.fillStyle = color;\r\n        this.ctx.textAlign = \"left\";\r\n        this.ctx.textBaseline = \"top\";\r\n        this.ctx.fillText(text, x, y);\r\n    };\r\n    canvas2d.prototype.clear = function () {\r\n        this.ctx.clearRect(0, 0, this.width, this.height);\r\n    };\r\n    return canvas2d;\r\n}());\r\nexports.canvas2d = canvas2d;\r\n\n\n//# sourceURL=webpack:///./node_modules/@takahiro_sato/canvas2d/dist/canvas2d.js?");

/***/ }),

/***/ "./node_modules/@takahiro_sato/canvas2d/dist/vec2.js":
/*!***********************************************************!*\
  !*** ./node_modules/@takahiro_sato/canvas2d/dist/vec2.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar vec2 = /** @class */ (function () {\r\n    function vec2(x, y) {\r\n        this.x = x;\r\n        this.y = y;\r\n    }\r\n    Object.defineProperty(vec2.prototype, \"length\", {\r\n        get: function () {\r\n            return Math.sqrt(this.x * this.x + this.y * this.y);\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    vec2.prototype.add = function (x, y) {\r\n        this.x += x;\r\n        this.y += y;\r\n        return this;\r\n    };\r\n    vec2.prototype.addv = function (v) {\r\n        this.x += v.x;\r\n        this.y += v.y;\r\n        return this;\r\n    };\r\n    vec2.prototype.rotate = function (degree) {\r\n        var _a;\r\n        var rad = (Math.PI * degree) / 180;\r\n        _a = [\r\n            this.x * Math.cos(rad) - this.y * Math.sin(rad),\r\n            this.x * Math.sin(rad) + this.y * Math.cos(rad)\r\n        ], this.x = _a[0], this.y = _a[1];\r\n        return this;\r\n    };\r\n    return vec2;\r\n}());\r\nexports.default = vec2;\r\n\n\n//# sourceURL=webpack:///./node_modules/@takahiro_sato/canvas2d/dist/vec2.js?");

/***/ }),

/***/ "./pattern/grider_13.json":
/*!********************************!*\
  !*** ./pattern/grider_13.json ***!
  \********************************/
/*! exports provided: array, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"array\\\":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0],[1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],[0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0]]}\");\n\n//# sourceURL=webpack:///./pattern/grider_13.json?");

/***/ }),

/***/ "./pattern/new_gun.json":
/*!******************************!*\
  !*** ./pattern/new_gun.json ***!
  \******************************/
/*! exports provided: array, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"array\\\":[[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0]]}\");\n\n//# sourceURL=webpack:///./pattern/new_gun.json?");

/***/ }),

/***/ "./pattern/pulser.json":
/*!*****************************!*\
  !*** ./pattern/pulser.json ***!
  \*****************************/
/*! exports provided: array, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"array\\\":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0],[0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0],[0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0],[0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0],[0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0],[0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0],[0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}\");\n\n//# sourceURL=webpack:///./pattern/pulser.json?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util/index.ts\");\n/* harmony import */ var _lifegame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lifegame */ \"./src/lifegame.ts\");\n\r\n\r\nObject(_lifegame__WEBPACK_IMPORTED_MODULE_1__[\"set\"])(__webpack_require__(/*! ../pattern/grider_13.json */ \"./pattern/grider_13.json\").array);\r\nvar addClickEvent = function (id, f) {\r\n    var _a, _b;\r\n    (_b = (_a = document) === null || _a === void 0 ? void 0 : _a.getElementById(id)) === null || _b === void 0 ? void 0 : _b.addEventListener(\"click\", f);\r\n};\r\naddClickEvent(\"random\", function () {\r\n    Object(_lifegame__WEBPACK_IMPORTED_MODULE_1__[\"random\"])();\r\n});\r\naddClickEvent(\"new_gun\", function () {\r\n    Object(_lifegame__WEBPACK_IMPORTED_MODULE_1__[\"set\"])(__webpack_require__(/*! ../pattern/new_gun.json */ \"./pattern/new_gun.json\").array);\r\n});\r\naddClickEvent(\"grider13\", function () {\r\n    Object(_lifegame__WEBPACK_IMPORTED_MODULE_1__[\"set\"])(__webpack_require__(/*! ../pattern/grider_13.json */ \"./pattern/grider_13.json\").array);\r\n});\r\naddClickEvent(\"pulser\", function () {\r\n    Object(_lifegame__WEBPACK_IMPORTED_MODULE_1__[\"set\"])(__webpack_require__(/*! ../pattern/pulser.json */ \"./pattern/pulser.json\").array);\r\n});\r\nvar cnt = 0;\r\nvar mod = 4;\r\naddClickEvent(\"fps60\", function () {\r\n    mod = 1;\r\n});\r\naddClickEvent(\"fps30\", function () {\r\n    mod = 2;\r\n});\r\naddClickEvent(\"fps15\", function () {\r\n    mod = 4;\r\n});\r\n(function animation() {\r\n    _util__WEBPACK_IMPORTED_MODULE_0__[\"c2d\"].fillBackground(\"#000000\");\r\n    if (cnt % mod == 0) {\r\n        Object(_lifegame__WEBPACK_IMPORTED_MODULE_1__[\"update\"])();\r\n    }\r\n    cnt++;\r\n    Object(_lifegame__WEBPACK_IMPORTED_MODULE_1__[\"draw\"])();\r\n    requestAnimationFrame(animation);\r\n})();\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/lifegame.ts":
/*!*************************!*\
  !*** ./src/lifegame.ts ***!
  \*************************/
/*! exports provided: set, random, update, draw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"set\", function() { return set; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"random\", function() { return random; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"update\", function() { return update; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"draw\", function() { return draw; });\n/* harmony import */ var _takahiro_sato_canvas2d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @takahiro_sato/canvas2d */ \"./node_modules/@takahiro_sato/canvas2d/dist/canvas2d.js\");\n/* harmony import */ var _takahiro_sato_canvas2d__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_takahiro_sato_canvas2d__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ \"./src/util/index.ts\");\n\r\n\r\nvar LIVE;\r\n(function (LIVE) {\r\n    LIVE[LIVE[\"die\"] = 0] = \"die\";\r\n    LIVE[LIVE[\"live\"] = 1] = \"live\";\r\n})(LIVE || (LIVE = {}));\r\nvar Cell = /** @class */ (function () {\r\n    function Cell(x, y, w, h) {\r\n        this.pos = new _takahiro_sato_canvas2d__WEBPACK_IMPORTED_MODULE_0__[\"vec2\"](x, y);\r\n        this.live = LIVE.die;\r\n        this._width = w;\r\n        this._height = h;\r\n    }\r\n    Cell.prototype.draw = function () {\r\n        if (this.live) {\r\n            _util__WEBPACK_IMPORTED_MODULE_1__[\"c2d\"].fillRect({\r\n                cx: this.pos.x,\r\n                cy: this.pos.y,\r\n                w: this._width,\r\n                h: this._height,\r\n                color: \"#0000ff\"\r\n            });\r\n        }\r\n    };\r\n    return Cell;\r\n}());\r\nvar CellMgr = /** @class */ (function () {\r\n    function CellMgr(width, height, cellWidth, cellHeight) {\r\n        this._width = width;\r\n        this._height = height;\r\n        this._cells = new Array();\r\n        for (var y = 0; y < height; y++) {\r\n            this._cells[y] = new Array();\r\n            for (var x = 0; x < width; x++) {\r\n                this._cells[y][x] = new Cell(x * cellWidth, y * cellHeight, cellWidth, cellHeight);\r\n            }\r\n        }\r\n    }\r\n    CellMgr.prototype.update = function () {\r\n        var _this = this;\r\n        var nextCell = new Array();\r\n        for (var y = 0; y < this._height; y++) {\r\n            nextCell[y] = new Array();\r\n        }\r\n        var f = function (x, y) {\r\n            var ret = 0;\r\n            var ymin = y > 0 ? y - 1 : 0;\r\n            var ymax = y < _this._height - 1 ? y + 1 : _this._height - 1;\r\n            var xmin = x > 0 ? x - 1 : 0;\r\n            var xmax = x < _this._width - 1 ? x + 1 : _this._width - 1;\r\n            for (var _y = ymin; _y <= ymax; _y++) {\r\n                for (var _x = xmin; _x <= xmax; _x++) {\r\n                    if (x == _x && y == _y)\r\n                        continue;\r\n                    if (_this._cells[_y][_x].live)\r\n                        ret++;\r\n                }\r\n            }\r\n            return ret;\r\n        };\r\n        for (var y = 0; y < this._height; y++) {\r\n            for (var x = 0; x < this._width; x++) {\r\n                switch (f(x, y)) {\r\n                    case 0:\r\n                    case 1:\r\n                        nextCell[y][x] = LIVE.die;\r\n                        break;\r\n                    case 2:\r\n                        nextCell[y][x] = this._cells[y][x].live;\r\n                        break;\r\n                    case 3:\r\n                        nextCell[y][x] = LIVE.live;\r\n                        break;\r\n                    default:\r\n                        nextCell[y][x] = LIVE.die;\r\n                        break;\r\n                }\r\n            }\r\n        }\r\n        this.set(nextCell);\r\n    };\r\n    CellMgr.prototype.set = function (arr) {\r\n        for (var y = 0; y < arr.length; y++) {\r\n            for (var x = 0; x < arr[y].length; x++) {\r\n                this._cells[y][x].live = arr[y][x];\r\n            }\r\n        }\r\n    };\r\n    CellMgr.prototype.random = function () {\r\n        this._cells.map(function (c) {\r\n            c.map(function (c) {\r\n                c.live = Math.random() > 0.5 ? 1 : 0;\r\n            });\r\n        });\r\n    };\r\n    CellMgr.prototype.init = function () {\r\n        this._cells.map(function (c) {\r\n            c.map(function (c) { return c.live = LIVE.die; });\r\n        });\r\n    };\r\n    CellMgr.prototype.draw = function () {\r\n        this._cells.map(function (c) {\r\n            c.map(function (c) { return c.draw(); });\r\n        });\r\n    };\r\n    return CellMgr;\r\n}());\r\nvar cells = new CellMgr(216, 144, 5, 5);\r\nfunction set(arr) {\r\n    var _paddingx = 20;\r\n    var _paddingy = 10;\r\n    cells.init();\r\n    for (var y = 0; y < arr.length; y++) {\r\n        for (var x = 0; x < arr[y].length; x++) {\r\n            cells._cells[y + _paddingy][x + _paddingx].live = arr[y][x];\r\n        }\r\n    }\r\n}\r\nfunction random() {\r\n    cells.random();\r\n}\r\nfunction update() {\r\n    cells.update();\r\n}\r\nfunction draw() {\r\n    cells.draw();\r\n}\r\n\n\n//# sourceURL=webpack:///./src/lifegame.ts?");

/***/ }),

/***/ "./src/util/c2d.ts":
/*!*************************!*\
  !*** ./src/util/c2d.ts ***!
  \*************************/
/*! exports provided: canvasId, c2d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"canvasId\", function() { return canvasId; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"c2d\", function() { return c2d; });\n/* harmony import */ var _takahiro_sato_canvas2d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @takahiro_sato/canvas2d */ \"./node_modules/@takahiro_sato/canvas2d/dist/canvas2d.js\");\n/* harmony import */ var _takahiro_sato_canvas2d__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_takahiro_sato_canvas2d__WEBPACK_IMPORTED_MODULE_0__);\n\r\nvar canvasId = \"canvas2d\";\r\nvar c2d = new _takahiro_sato_canvas2d__WEBPACK_IMPORTED_MODULE_0__[\"canvas2d\"](canvasId);\r\n\n\n//# sourceURL=webpack:///./src/util/c2d.ts?");

/***/ }),

/***/ "./src/util/event.ts":
/*!***************************!*\
  !*** ./src/util/event.ts ***!
  \***************************/
/*! exports provided: keyCode, event */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"keyCode\", function() { return keyCode; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"event\", function() { return event; });\n/* harmony import */ var _c2d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./c2d */ \"./src/util/c2d.ts\");\n\r\nvar keyCode;\r\n(function (keyCode) {\r\n    keyCode[keyCode[\"space\"] = 32] = \"space\";\r\n    keyCode[keyCode[\"left\"] = 37] = \"left\";\r\n    keyCode[keyCode[\"up\"] = 38] = \"up\";\r\n    keyCode[keyCode[\"right\"] = 39] = \"right\";\r\n    keyCode[keyCode[\"down\"] = 40] = \"down\";\r\n    keyCode[keyCode[\"F12\"] = 123] = \"F12\";\r\n})(keyCode || (keyCode = {}));\r\nvar _event = /** @class */ (function () {\r\n    function _event() {\r\n        var _this = this;\r\n        this.keyDownEventListeners = [];\r\n        window.addEventListener(\"keydown\", function (e) {\r\n            _this.keyDownEventListeners\r\n                .filter(function (l) { return l.key === e.keyCode; })\r\n                .map(function (l) {\r\n                l.listener(e);\r\n            });\r\n            if (e.keyCode !== keyCode.F12)\r\n                e.preventDefault();\r\n        });\r\n    }\r\n    _event.prototype.addMouseDownEvent = function (callback) {\r\n        var _a;\r\n        (_a = document.getElementById(_c2d__WEBPACK_IMPORTED_MODULE_0__[\"canvasId\"])) === null || _a === void 0 ? void 0 : _a.addEventListener(\"mousedown\", callback);\r\n    };\r\n    _event.prototype.addMouseMoveEvent = function (callback) {\r\n        var _a;\r\n        (_a = document.getElementById(_c2d__WEBPACK_IMPORTED_MODULE_0__[\"canvasId\"])) === null || _a === void 0 ? void 0 : _a.addEventListener(\"mousemove\", callback);\r\n    };\r\n    _event.prototype.addMouseUpEvent = function (callBack) {\r\n        var _a;\r\n        (_a = document.getElementById(_c2d__WEBPACK_IMPORTED_MODULE_0__[\"canvasId\"])) === null || _a === void 0 ? void 0 : _a.addEventListener(\"mouseup\", callBack);\r\n    };\r\n    return _event;\r\n}());\r\nvar event = new _event();\r\n\n\n//# sourceURL=webpack:///./src/util/event.ts?");

/***/ }),

/***/ "./src/util/index.ts":
/*!***************************!*\
  !*** ./src/util/index.ts ***!
  \***************************/
/*! exports provided: c2d, event, keyCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _c2d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./c2d */ \"./src/util/c2d.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"c2d\", function() { return _c2d__WEBPACK_IMPORTED_MODULE_0__[\"c2d\"]; });\n\n/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event */ \"./src/util/event.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"event\", function() { return _event__WEBPACK_IMPORTED_MODULE_1__[\"event\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"keyCode\", function() { return _event__WEBPACK_IMPORTED_MODULE_1__[\"keyCode\"]; });\n\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/util/index.ts?");

/***/ })

/******/ });