module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/Auth/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./component/info.js":
/*!***************************!*\
  !*** ./component/info.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/localadmin/Downloads/Training/GitHupProjects/my-space-ssr/component/info.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\nconst info = props => {\n  return __jsx(\"div\", {\n    className: \"jsx-3099623274\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 1\n    }\n  }, __jsx(\"h1\", {\n    className: \"jsx-3099623274\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, \" \", props.name), __jsx(\"h3\", {\n    className: \"jsx-3099623274\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 5\n    }\n  }, props.age), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"3099623274\",\n    __self: undefined\n  }, \"div.jsx-3099623274{border:2px solid black;text-align:center;color:grey;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sb2NhbGFkbWluL0Rvd25sb2Fkcy9UcmFpbmluZy9HaXRIdXBQcm9qZWN0cy9teS1zcGFjZS1zc3IvY29tcG9uZW50L2luZm8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY0ksQUFJZ0MsdUJBQ1Qsa0JBQ1AsV0FFWCIsImZpbGUiOiIvVXNlcnMvbG9jYWxhZG1pbi9Eb3dubG9hZHMvVHJhaW5pbmcvR2l0SHVwUHJvamVjdHMvbXktc3BhY2Utc3NyL2NvbXBvbmVudC9pbmZvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuXG5jb25zdCBpbmZvID0ocHJvcHMpPT57XG5cbiAgICByZXR1cm4gKFxuPGRpdj4gIFxuICAgIDxoMT4ge3Byb3BzLm5hbWUgfTwvaDE+XG5cbiAgICA8aDM+e3Byb3BzLmFnZX08L2gzPlxuXG48c3R5bGUganN4Plxue1xuXG4gICAgYFxuICAgIGRpdiB7XG5cbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICBjb2xvcjpncmV5O1xuXG4gICAgfVxuICAgIGBcbn1cbjwvc3R5bGU+XG48L2Rpdj5cblxuICAgIClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBpbmZvOyJdfQ== */\\n/*@ sourceURL=/Users/localadmin/Downloads/Training/GitHupProjects/my-space-ssr/component/info.js */\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (info);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvaW5mby5qcz8yOGJkIl0sIm5hbWVzIjpbImluZm8iLCJwcm9wcyIsIm5hbWUiLCJhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBR0EsTUFBTUEsSUFBSSxHQUFHQyxLQUFELElBQVM7QUFFakIsU0FDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBTUEsS0FBSyxDQUFDQyxJQUFaLENBREosRUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0QsS0FBSyxDQUFDRSxHQUFYLENBSEo7QUFBQTtBQUFBO0FBQUEsbWlDQURJO0FBdUJILENBekJEOztBQTRCZUgsbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnQvaW5mby5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cblxuY29uc3QgaW5mbyA9KHByb3BzKT0+e1xuXG4gICAgcmV0dXJuIChcbjxkaXY+ICBcbiAgICA8aDE+IHtwcm9wcy5uYW1lIH08L2gxPlxuXG4gICAgPGgzPntwcm9wcy5hZ2V9PC9oMz5cblxuPHN0eWxlIGpzeD5cbntcblxuICAgIGBcbiAgICBkaXYge1xuXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgY29sb3I6Z3JleTtcblxuICAgIH1cbiAgICBgXG59XG48L3N0eWxlPlxuPC9kaXY+XG5cbiAgICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgaW5mbzsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./component/info.js\n");

/***/ }),

/***/ "./pages/Auth/index.js":
/*!*****************************!*\
  !*** ./pages/Auth/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _component_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../component/info */ \"./component/info.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/localadmin/Downloads/Training/GitHupProjects/my-space-ssr/pages/Auth/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst Auth = props => {\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 1\n    }\n  }, __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }\n  }, \"Hi This is \", props.res), __jsx(_component_info__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    name: \"Ankush\",\n    age: \"30\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 1\n    }\n  }));\n};\n\nAuth.getInitialProps = context => {\n  const promise = new Promise((resolve, reject) => {\n    axios__WEBPACK_IMPORTED_MODULE_2___default()(\"https://api.spacexdata.com/v3/launches?limit=100\").then(res => {\n      console.log(\"Hello\", res);\n      resolve({\n        res: res\n      });\n    }).catch(err => console.log(err)); //  console.log(\"Hii\",context)\n\n    return promise;\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Auth);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9BdXRoL2luZGV4LmpzPzM0MDciXSwibmFtZXMiOlsiQXV0aCIsInByb3BzIiwicmVzIiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsInByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImF4aW9zIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBR0EsTUFBTUEsSUFBSSxHQUFJQyxLQUFELElBQVM7QUFHbEIsU0FDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBZ0JBLEtBQUssQ0FBQ0MsR0FBdEIsQ0FESixFQUVBLE1BQUMsdURBQUQ7QUFBTyxRQUFJLEVBQUUsUUFBYjtBQUFzQixPQUFHLEVBQUUsSUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZBLENBREk7QUFXSCxDQWREOztBQWlCQUYsSUFBSSxDQUFDRyxlQUFMLEdBQXVCQyxPQUFELElBQVc7QUFHN0IsUUFBTUMsT0FBTyxHQUFHLElBQUlDLE9BQUosQ0FBWSxDQUFDQyxPQUFELEVBQVNDLE1BQVQsS0FBbUI7QUFFM0NDLGdEQUFLLENBQUMsa0RBQUQsQ0FBTCxDQUEwREMsSUFBMUQsQ0FBZ0VSLEdBQUQsSUFBTztBQUNsRVMsYUFBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFvQlYsR0FBcEI7QUFFQUssYUFBTyxDQUFDO0FBQUVMLFdBQUcsRUFBRUE7QUFBUCxPQUFELENBQVA7QUFBd0IsS0FINUIsRUFHOEJXLEtBSDlCLENBR3FDQyxHQUFELElBQVFILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRSxHQUFaLENBSDVDLEVBRjJDLENBT3pDOztBQUNFLFdBQU9ULE9BQVA7QUFDWCxHQVRtQixDQUFoQjtBQVdILENBZEQ7O0FBaUJlTCxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL0F1dGgvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEluZm8gZnJvbSAnLi4vLi4vY29tcG9uZW50L2luZm8nXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cblxuY29uc3QgQXV0aCA9IChwcm9wcyk9PntcblxuXG4gICAgcmV0dXJuIChcbjxkaXY+XG4gICAgPGgxPkhpIFRoaXMgaXMge3Byb3BzLnJlc308L2gxPlxuPEluZm8gIG5hbWUgPVwiQW5rdXNoXCIgYWdlID1cIjMwXCIgICAvPlxuXG48L2Rpdj5cblxuICAgIClcblxuXG4gICAgXG59XG5cblxuQXV0aC5nZXRJbml0aWFsUHJvcHMgPShjb250ZXh0KT0+e1xuXG5cbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KSA9PntcblxuICAgICAgICBheGlvcyhcImh0dHBzOi8vYXBpLnNwYWNleGRhdGEuY29tL3YzL2xhdW5jaGVzP2xpbWl0PTEwMFwiKS50aGVuKChyZXMpPT57XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkhlbGxvXCIscmVzKVxuICAgICAgICBcbiAgICAgICAgICAgIHJlc29sdmUoeyByZXM6IHJlcyB9KSAgfSkuY2F0Y2goKGVycik9PiBjb25zb2xlLmxvZyhlcnIpICApXG4gICAgXG4gICAgICAgICAgLy8gIGNvbnNvbGUubG9nKFwiSGlpXCIsY29udGV4dClcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlIFxufSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEF1dGg7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Auth/index.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-jsx/style\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCI/MmJiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJzdHlsZWQtanN4L3N0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-jsx/style\n");

/***/ })

/******/ });