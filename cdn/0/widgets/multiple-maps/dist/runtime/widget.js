System.register(["jimu-arcgis","jimu-core"], function(__WEBPACK_DYNAMIC_EXPORT__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, __WEBPACK_EXTERNAL_MODULE_jimu_core__;
	return {
		setters: [
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = module;
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_core__ = module;
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./experience-builder-multiple-maps/widgets/multiple-maps/src/runtime/widget.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./experience-builder-multiple-maps/widgets/multiple-maps/src/runtime/widget.tsx":
/*!***************************************************************************************!*\
  !*** ./experience-builder-multiple-maps/widgets/multiple-maps/src/runtime/widget.tsx ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ \"jimu-core\");\n/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jimu_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ \"jimu-arcgis\");\n/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__);\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar __spreadArrays = (undefined && undefined.__spreadArrays) || function () {\r\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\r\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\r\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\r\n            r[k] = a[j];\r\n    return r;\r\n};\r\n/** @jsx jsx */\r\n\r\n\r\nvar Widget = /** @class */ (function (_super) {\r\n    __extends(Widget, _super);\r\n    function Widget(props) {\r\n        var _this = _super.call(this, props) || this;\r\n        // Initial state\r\n        _this.state = {\r\n            jimuMapViews: [],\r\n            mapWidgetIds: [],\r\n            selectValue: '',\r\n            lonLat: null\r\n        };\r\n        return _this;\r\n    }\r\n    Widget.prototype.componentDidMount = function () {\r\n        // When the widget loads, get all the mapViews from window._appState\r\n        var mapWidgetIds = Object.values(window._appState.appConfig.widgets).filter(function (widgetInfo) {\r\n            return widgetInfo.uri === 'widgets/arcgis/arcgis-map/';\r\n        }).map(function (widgetInfo) {\r\n            return widgetInfo.id;\r\n        });\r\n        this.setState({\r\n            mapWidgetIds: mapWidgetIds\r\n        });\r\n    };\r\n    /**\r\n     * Zooms to a point for a single jimuMapView\r\n     *\r\n     * @param jmv JimuMapView\r\n     * @param lonLat [longitude, latitude]\r\n     */\r\n    Widget.prototype.jmvGoTo = function (jmv, lonLat) {\r\n        jmv.view.goTo(lonLat);\r\n        jmv.view.zoom = 10;\r\n    };\r\n    /**\r\n     * Gets called when the select changes\r\n     * @param evt\r\n     */\r\n    Widget.prototype.selectChangeHandler = function (evt) {\r\n        var _this = this;\r\n        // Save the current value\r\n        this.setState({ selectValue: evt.target.value });\r\n        // Save the longitude/latitude so that if future maps get created, they\r\n        // will use this to zoom to.\r\n        var _a = evt.target.value.split(','), longitude = _a[0], latitude = _a[1];\r\n        var lonLat = [parseFloat(longitude), parseFloat(latitude)];\r\n        this.setState({ lonLat: lonLat });\r\n        // Loop through all existing JMVs and set the location.\r\n        this.state.jimuMapViews.forEach(function (jmv) {\r\n            _this.jmvGoTo(jmv, lonLat);\r\n        });\r\n    };\r\n    Widget.prototype.render = function () {\r\n        var _this = this;\r\n        return (Object(jimu_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", { className: \"widget-demo jimu-widget m-2\" },\r\n            this.state.mapWidgetIds.map(function (widgetId) { return (Object(jimu_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__[\"JimuMapViewComponent\"], { useMapWidgetId: widgetId, onActiveViewChange: function (jmv) {\r\n                    var jimuMapViews = __spreadArrays(_this.state.jimuMapViews, [jmv]);\r\n                    _this.setState({\r\n                        jimuMapViews: jimuMapViews,\r\n                    });\r\n                    if (_this.state.lonLat) {\r\n                        _this.jmvGoTo(jmv, _this.state.lonLat);\r\n                    }\r\n                } })); }),\r\n            Object(jimu_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", null,\r\n                Object(jimu_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"select\", { onChange: function (e) { _this.selectChangeHandler(e); }, value: this.state.selectValue },\r\n                    Object(jimu_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"option\", { value: \"\" }),\r\n                    Object(jimu_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"option\", { value: \"-87.629700,41.873651\" }, \"Chicago\"),\r\n                    Object(jimu_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"option\", { value: \"-90.196381,38.622235\" }, \"St. Louis\"),\r\n                    Object(jimu_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"option\", { value: \"-98.490028,29.430029\" }, \"San Antonio\")))));\r\n    };\r\n    return Widget;\r\n}(jimu_core__WEBPACK_IMPORTED_MODULE_0__[\"React\"].PureComponent));\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Widget);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9leHBlcmllbmNlLWJ1aWxkZXItbXVsdGlwbGUtbWFwcy93aWRnZXRzL211bHRpcGxlLW1hcHMvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2V4cGVyaWVuY2UtYnVpbGRlci1tdWx0aXBsZS1tYXBzL3dpZGdldHMvbXVsdGlwbGUtbWFwcy9zcmMvcnVudGltZS93aWRnZXQudHN4P2I3ZDgiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7UmVhY3QsIEFsbFdpZGdldFByb3BzLCAganN4IH0gZnJvbSAnamltdS1jb3JlJztcclxuaW1wb3J0IHsgSmltdU1hcFZpZXdDb21wb25lbnQsIEppbXVNYXBWaWV3IH0gZnJvbSBcImppbXUtYXJjZ2lzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaWRnZXQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PEFsbFdpZGdldFByb3BzPGFueT4sIGFueT4ge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgLy8gSW5pdGlhbCBzdGF0ZVxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgamltdU1hcFZpZXdzOiBbXSxcclxuICAgICAgbWFwV2lkZ2V0SWRzOiBbXSxcclxuICAgICAgc2VsZWN0VmFsdWU6ICcnLFxyXG4gICAgICBsb25MYXQ6IG51bGxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIC8vIFdoZW4gdGhlIHdpZGdldCBsb2FkcywgZ2V0IGFsbCB0aGUgbWFwVmlld3MgZnJvbSB3aW5kb3cuX2FwcFN0YXRlXHJcbiAgICBjb25zdCBtYXBXaWRnZXRJZHMgPSBPYmplY3QudmFsdWVzKHdpbmRvdy5fYXBwU3RhdGUuYXBwQ29uZmlnLndpZGdldHMpLmZpbHRlcigod2lkZ2V0SW5mbzogYW55KSA9PiB7XHJcbiAgICAgIHJldHVybiB3aWRnZXRJbmZvLnVyaSA9PT0gJ3dpZGdldHMvYXJjZ2lzL2FyY2dpcy1tYXAvJ1xyXG4gICAgfSkubWFwKCh3aWRnZXRJbmZvOiBhbnkpID0+IHtcclxuICAgICAgcmV0dXJuIHdpZGdldEluZm8uaWQ7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBtYXBXaWRnZXRJZHM6IG1hcFdpZGdldElkc1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBab29tcyB0byBhIHBvaW50IGZvciBhIHNpbmdsZSBqaW11TWFwVmlld1xyXG4gICAqIFxyXG4gICAqIEBwYXJhbSBqbXYgSmltdU1hcFZpZXdcclxuICAgKiBAcGFyYW0gbG9uTGF0IFtsb25naXR1ZGUsIGxhdGl0dWRlXVxyXG4gICAqL1xyXG4gIGptdkdvVG8oam12OiBKaW11TWFwVmlldywgbG9uTGF0OiBudW1iZXJbXSkge1xyXG4gICAgam12LnZpZXcuZ29Ubyhsb25MYXQpO1xyXG4gICAgam12LnZpZXcuem9vbSA9IDEwO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0cyBjYWxsZWQgd2hlbiB0aGUgc2VsZWN0IGNoYW5nZXNcclxuICAgKiBAcGFyYW0gZXZ0IFxyXG4gICAqL1xyXG4gIHNlbGVjdENoYW5nZUhhbmRsZXIoZXZ0KSB7XHJcbiAgICAvLyBTYXZlIHRoZSBjdXJyZW50IHZhbHVlXHJcbiAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RWYWx1ZTogZXZ0LnRhcmdldC52YWx1ZX0pO1xyXG4gICAgXHJcbiAgICAvLyBTYXZlIHRoZSBsb25naXR1ZGUvbGF0aXR1ZGUgc28gdGhhdCBpZiBmdXR1cmUgbWFwcyBnZXQgY3JlYXRlZCwgdGhleVxyXG4gICAgLy8gd2lsbCB1c2UgdGhpcyB0byB6b29tIHRvLlxyXG4gICAgY29uc3QgW2xvbmdpdHVkZSwgbGF0aXR1ZGVdID0gZXZ0LnRhcmdldC52YWx1ZS5zcGxpdCgnLCcpO1xyXG4gICAgY29uc3QgbG9uTGF0ID0gW3BhcnNlRmxvYXQobG9uZ2l0dWRlKSwgcGFyc2VGbG9hdChsYXRpdHVkZSldO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvbkxhdCB9KTtcclxuXHJcbiAgICAvLyBMb29wIHRocm91Z2ggYWxsIGV4aXN0aW5nIEpNVnMgYW5kIHNldCB0aGUgbG9jYXRpb24uXHJcbiAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3cy5mb3JFYWNoKChqbXY6IEppbXVNYXBWaWV3KSA9PiB7XHJcbiAgICAgIHRoaXMuam12R29UbyhqbXYsIGxvbkxhdCk7XHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1kZW1vIGppbXUtd2lkZ2V0IG0tMlwiPlxyXG5cclxuICAgICAgICB7LyogTG9vcCB0aHJvdWdoIGFsbCBtYXBXaWRnZXRJZHMgYW5kIGNyZWF0ZSBhXHJcbiAgICAgICAgSmltdU1hcFZpZXdDb21wb25lbnQgZm9yIGVhY2ggKi99XHJcbiAgICAgICAge3RoaXMuc3RhdGUubWFwV2lkZ2V0SWRzLm1hcCh3aWRnZXRJZCA9PiAoXHJcbiAgICAgICAgICA8SmltdU1hcFZpZXdDb21wb25lbnRcclxuICAgICAgICAgICAgdXNlTWFwV2lkZ2V0SWQ9e3dpZGdldElkfVxyXG4gICAgICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2U9eyhqbXY6IEppbXVNYXBWaWV3KSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgamltdU1hcFZpZXdzID0gWy4uLnRoaXMuc3RhdGUuamltdU1hcFZpZXdzLCBqbXZdO1xyXG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgamltdU1hcFZpZXdzOiBqaW11TWFwVmlld3MsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUubG9uTGF0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmptdkdvVG8oam12LCB0aGlzLnN0YXRlLmxvbkxhdCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9eyhlKSA9PiB7IHRoaXMuc2VsZWN0Q2hhbmdlSGFuZGxlcihlKTsgfX0gdmFsdWU9e3RoaXMuc3RhdGUuc2VsZWN0VmFsdWV9PlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+PC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCItODcuNjI5NzAwLDQxLjg3MzY1MVwiPkNoaWNhZ288L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIi05MC4xOTYzODEsMzguNjIyMjM1XCI+U3QuIExvdWlzPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCItOTguNDkwMDI4LDI5LjQzMDAyOVwiPlNhbiBBbnRvbmlvPC9vcHRpb24+XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBS0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUFBOzsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./experience-builder-multiple-maps/widgets/multiple-maps/src/runtime/widget.tsx\n");

/***/ }),

/***/ "jimu-arcgis":
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamltdS1hcmNnaXMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqaW11LWFyY2dpc1wiPzlmMWMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///jimu-arcgis\n");

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamltdS1jb3JlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiamltdS1jb3JlXCI/YzY5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///jimu-core\n");

/***/ })

/******/ })
			);
		}
	};
});