webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/localadmin/Downloads/Training/GitHupProjects/my-space-ssr/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\nvar Users = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Users, _Component);\n\n  var _super = _createSuper(Users);\n\n  function Users() {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Users);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Users, [{\n    key: \"render\",\n    value: function render() {\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 1\n        }\n      }, __jsx(\"h1\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 5\n        }\n      }, \"Main Pages of \", this.props.appData[0].mission_name), __jsx(\"p\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 1\n        }\n      }, \"Go To\", __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n        href: \"/Auth\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 1\n        }\n      }, __jsx(\"a\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 5\n        }\n      }, \"  Auth\"))), __jsx(\"button\", {\n        onClick: function onClick() {\n          return next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/Auth');\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 3\n        }\n      }, \" Go to Auth\"));\n    }\n  }], [{\n    key: \"getInitialProps\",\n    value: function getInitialProps(context) {\n      var promise = new Promise(function (resolve, reject) {\n        // setTimeout(()=>{\n        //     resolve({appData: \"Super Application\"});\n        // }, 100)\n        axios__WEBPACK_IMPORTED_MODULE_8___default()(\"https://api.spacexdata.com/v3/launches?limit=100\").then(function (res) {\n          console.log(\"Hello\", res);\n          resolve({\n            appData: res\n          });\n        })[\"catch\"](function (err) {\n          return console.log(err);\n        });\n      }); //  console.log(\"Hii\",context)\n\n      return promise;\n    }\n  }]);\n\n  return Users;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Users);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJVc2VycyIsInByb3BzIiwiYXBwRGF0YSIsIm1pc3Npb25fbmFtZSIsIlJvdXRlciIsInB1c2giLCJjb250ZXh0IiwicHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiYXhpb3MiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImVyciIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7SUFJTUEsSzs7Ozs7Ozs7Ozs7Ozs2QkFzQkU7QUFDSixhQUNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUFtQixLQUFLQyxLQUFMLENBQVdDLE9BQVgsQ0FBbUIsQ0FBbkIsRUFBc0JDLFlBQXpDLENBREosRUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUNBLE1BQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsT0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixDQURBLENBSEEsRUFRRTtBQUFRLGVBQU8sRUFBRTtBQUFBLGlCQUFJQyxrREFBTSxDQUFDQyxJQUFQLENBQVksT0FBWixDQUFKO0FBQUEsU0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFSRixDQURJO0FBWUM7OztvQ0FoQ3VCQyxPLEVBQVE7QUFFcEMsVUFBTUMsT0FBTyxHQUFHLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVNDLE1BQVQsRUFBbUI7QUFFM0M7QUFDQTtBQUNBO0FBRUFDLG9EQUFLLENBQUMsa0RBQUQsQ0FBTCxDQUEwREMsSUFBMUQsQ0FBK0QsVUFBQ0MsR0FBRCxFQUFPO0FBQ2xFQyxpQkFBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFvQkYsR0FBcEI7QUFDQUosaUJBQU8sQ0FBQztBQUFFUCxtQkFBTyxFQUFFVztBQUFYLFdBQUQsQ0FBUDtBQUE0QixTQUZoQyxXQUV3QyxVQUFDRyxHQUFEO0FBQUEsaUJBQVFGLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxHQUFaLENBQVI7QUFBQSxTQUZ4QztBQUtILE9BWGUsQ0FBaEIsQ0FGb0MsQ0FlOUI7O0FBQ0UsYUFBT1QsT0FBUDtBQUNIOzs7O0VBcEJlVSwrQzs7QUFxQ0xqQixvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7ICAgIFxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5cblxuY2xhc3MgVXNlcnMgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cbiAgICBzdGF0aWMgIGdldEluaXRpYWxQcm9wcyhjb250ZXh0KXtcblxuY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCkgPT57XG5cbiAgICAvLyBzZXRUaW1lb3V0KCgpPT57XG4gICAgLy8gICAgIHJlc29sdmUoe2FwcERhdGE6IFwiU3VwZXIgQXBwbGljYXRpb25cIn0pO1xuICAgIC8vIH0sIDEwMClcblxuICAgIGF4aW9zKFwiaHR0cHM6Ly9hcGkuc3BhY2V4ZGF0YS5jb20vdjMvbGF1bmNoZXM/bGltaXQ9MTAwXCIpLnRoZW4oKHJlcyk9PntcbiAgICAgICAgY29uc29sZS5sb2coXCJIZWxsb1wiLHJlcylcbiAgICAgICAgcmVzb2x2ZSh7IGFwcERhdGE6IHJlcyB9KSAgfSkuY2F0Y2goKGVycik9PiBjb25zb2xlLmxvZyhlcnIpICApXG5cblxufSlcblxuICAgICAgLy8gIGNvbnNvbGUubG9nKFwiSGlpXCIsY29udGV4dClcbiAgICAgICAgcmV0dXJuIHByb21pc2UgO1xuICAgIH1cblxucmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbjxkaXY+XG4gICAgPGgxPk1haW4gUGFnZXMgb2Yge3RoaXMucHJvcHMuYXBwRGF0YVswXS5taXNzaW9uX25hbWV9PC9oMT5cblxuPHA+R28gVG9cbjxMaW5rIGhyZWY9XCIvQXV0aFwiID5cbiAgICA8YT4gIEF1dGg8L2E+XG4gIDwvTGluaz48L3A+XG5cbiAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+Um91dGVyLnB1c2goJy9BdXRoJyl9PiBHbyB0byBBdXRoPC9idXR0b24+XG48L2Rpdj5cbiAgICApO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFVzZXJzOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})