webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _container_space__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../container/space */ \"./container/space.js\");\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/localadmin/Downloads/Training/GitHupProjects/my-space-ssr/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n // import Router from 'next/router'\n// import Link from 'next/link';    \n\nvar Users = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Users, _Component);\n\n  var _super = _createSuper(Users);\n\n  function Users() {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, Users);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Users, [{\n    key: \"render\",\n    value: function render() {\n      //  console.log(\"HHHHHHH\",this.props.appData);\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 1\n        }\n      }, __jsx(_container_space__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        data: this.props.appData,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 5\n        }\n      }));\n    }\n  }], [{\n    key: \"getInitialProps\",\n    value: function () {\n      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {\n        var res, json;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return fetch('https://api.spacexdata.com/v3/launches?limit=100');\n\n              case 2:\n                res = _context.sent;\n                _context.next = 5;\n                return res.json();\n\n              case 5:\n                json = _context.sent;\n                return _context.abrupt(\"return\", {\n                  appData: json\n                });\n\n              case 7:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function getInitialProps(_x) {\n        return _getInitialProps.apply(this, arguments);\n      }\n\n      return getInitialProps;\n    }()\n  }]);\n\n  return Users;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Users);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJVc2VycyIsInByb3BzIiwiYXBwRGF0YSIsImN0eCIsImZldGNoIiwicmVzIiwianNvbiIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBO0FBQ0E7O0lBS01BLEs7Ozs7Ozs7Ozs7Ozs7NkJBU0U7QUFFTjtBQUVFLGFBQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUUsd0RBQUY7QUFBUyxZQUFJLEVBQUUsS0FBS0MsS0FBTCxDQUFXQyxPQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREosQ0FESTtBQUtDOzs7OytOQWhCNEJDLEc7Ozs7Ozs7dUJBQ1BDLEtBQUssQ0FBQyxrREFBRCxDOzs7QUFBakJDLG1COzt1QkFDYUEsR0FBRyxDQUFDQyxJQUFKLEU7OztBQUFiQSxvQjtpREFDQztBQUFFSix5QkFBTyxFQUFFSTtBQUFYLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBTEtDLCtDOztBQW9CTFAsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3BhY2UgZnJvbSAnLi4vY29udGFpbmVyL3NwYWNlJ1xuLy8gaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbi8vIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7ICAgIFxuXG5cblxuXG5jbGFzcyBVc2VycyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGN0eCkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuc3BhY2V4ZGF0YS5jb20vdjMvbGF1bmNoZXM/bGltaXQ9MTAwJylcbiAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKClcbiAgICAgICAgcmV0dXJuIHsgYXBwRGF0YToganNvbiB9XG4gICAgICB9XG5cblxucmVuZGVyKCl7XG5cbiAgLy8gIGNvbnNvbGUubG9nKFwiSEhISEhISFwiLHRoaXMucHJvcHMuYXBwRGF0YSk7XG5cbiAgICByZXR1cm4gKFxuPGRpdj5cbiAgICA8IFNwYWNlICBkYXRhPXt0aGlzLnByb3BzLmFwcERhdGF9ICAvPlxuPC9kaXY+XG4gICAgKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBVc2VyczsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})