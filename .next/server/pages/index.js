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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./container/space.module.css
var space_module = __webpack_require__("oOKA");
var space_module_default = /*#__PURE__*/__webpack_require__.n(space_module);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./component/Spinner/Spinner.module.css
var Spinner_module = __webpack_require__("v4kl");
var Spinner_module_default = /*#__PURE__*/__webpack_require__.n(Spinner_module);

// CONCATENATED MODULE: ./component/Spinner/Spinner.js
var __jsx = external_react_default.a.createElement;



const spinner = () => __jsx("div", {
  className: Spinner_module_default.a.Loader
}, "Loading...");

/* harmony default export */ var Spinner = (spinner);
// CONCATENATED MODULE: ./container/space.js
var space_jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class space_Space extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      year: [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
      spaceData: [],
      spinner: false
    });

    _defineProperty(this, "yearFilter", year => {
      let url = "https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=" + year;
      this.setState({
        spinner: true
      });
      external_axios_default()(url).then(resYear => {
        this.setState({
          spinner: false
        });
        this.setState({
          spaceData: resYear.data
        });
      }).catch(err => {});
    });

    _defineProperty(this, "launchHandler", val => {
      let url = "https://api.spacexdata.com/v3/launches?limit=100&launch_success=" + val;
      this.setState({
        spinner: true
      });
      external_axios_default()(url).then(res => {
        this.setState({
          spinner: false
        });
        this.setState({
          spaceData: res.data
        });
      }).catch(err => {
        this.setState({
          spinner: false
        });
      });
    });

    _defineProperty(this, "landingHandler", val => {
      let url = "https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=" + val;
      this.setState({
        spinner: true
      });
      external_axios_default()(url).then(res => {
        this.setState({
          spinner: false
        });
        this.setState({
          spaceData: res.data
        });
      }).catch(err => {
        this.setState({
          spinner: false
        });
      });
    });
  }

  componentDidMount() {
    //console.log("DibMount", this.props.data)
    this.setState({
      spaceData: this.props.data
    });
  }

  render() {
    //console.log("Vaa==",this.state.spaceData[1]);
    let dataElement = null;

    if (this.state.spinner) {
      dataElement = space_jsx(Spinner, null);
    } else if (this.state.spaceData.length === 0) {
      dataElement = space_jsx("h2", {
        style: {
          textAlign: 'center',
          color: "red",
          marginTop: '200px'
        }
      }, "Oops!.....No Record Found");
    } else {
      dataElement = space_jsx("div", {
        className: space_module_default.a.divMain
      }, this.state.spaceData.map(res => {
        return space_jsx("div", {
          className: space_module_default.a.divCol,
          key: res.launch_date_unix
        }, space_jsx("p", {
          className: space_module_default.a.falconId
        }, "FalconSat #", res.flight_number), space_jsx("label", {
          className: space_module_default.a.label
        }, " Mission Name:"), space_jsx("p", {
          className: space_module_default.a.p
        }, res.mission_name), space_jsx("br", null), space_jsx("label", {
          className: space_module_default.a.label
        }, " Launch Year:"), space_jsx("p", {
          className: space_module_default.a.p
        }, res.launch_year), space_jsx("br", null), space_jsx("label", {
          className: space_module_default.a.label
        }, " Sucessful Launch:"), space_jsx("p", {
          className: space_module_default.a.p
        }, res.launch_success ? "true" : "false"), space_jsx("br", null), space_jsx("label", {
          className: space_module_default.a.label
        }, " Sucessful Landing:"), space_jsx("p", {
          className: space_module_default.a.p
        }, res.rocket.first_stage.cores[0].land_success ? "true" : "false"));
      }));
    }

    return space_jsx("div", {
      className: space_module_default.a.div
    }, space_jsx("h2", {
      style: {
        marginLeft: '20px'
      }
    }, "SpaceX Launch Program"), space_jsx("div", {
      className: space_module_default.a.divFillter
    }, space_jsx("h3", null, "Filter"), space_jsx("p", {
      style: {
        textAlign: 'center',
        marginBottom: '-6px'
      }
    }, "Sucessful Launch"), space_jsx("hr", null), space_jsx("div", {
      className: space_module_default.a.buttonDiv
    }, space_jsx("button", {
      onClick: () => this.launchHandler(true),
      className: space_module_default.a.button2
    }, "True"), space_jsx("button", {
      onClick: () => this.launchHandler(false),
      className: space_module_default.a.button2
    }, "False")), space_jsx("p", {
      style: {
        textAlign: 'center',
        marginBottom: '-6px'
      }
    }, "Sucessful Landing"), space_jsx("hr", null), space_jsx("div", {
      className: space_module_default.a.buttonDiv
    }, space_jsx("button", {
      onClick: () => this.landingHandler(true),
      className: space_module_default.a.button2
    }, "True"), space_jsx("button", {
      onClick: () => this.landingHandler(false),
      className: space_module_default.a.button2
    }, "False")), space_jsx("p", {
      style: {
        textAlign: 'center',
        marginBottom: '-6px'
      }
    }, "Launch Year"), space_jsx("hr", null), this.state.year.map(y => {
      return space_jsx("div", {
        key: y,
        className: space_module_default.a.buttonDiv
      }, space_jsx("button", {
        onClick: () => this.yearFilter(y),
        className: space_module_default.a.button
      }, " ", y, "  "));
    })), dataElement);
  }

}

/* harmony default export */ var space = (space_Space);
// CONCATENATED MODULE: ./pages/index.js
var pages_jsx = external_react_default.a.createElement;



class pages_Users extends external_react_["Component"] {
  static async getInitialProps(ctx) {
    const res = await fetch('https://api.spacexdata.com/v3/launches?limit=100');
    const json = await res.json();
    return {
      appData: json
    };
  }

  render() {
    return pages_jsx("div", null, pages_jsx(space, {
      data: this.props.appData
    }));
  }

}

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Users);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "oOKA":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"divMain": "space_divMain__3VJRY",
	"divCol": "space_divCol__3FJz0",
	"buttonDiv": "space_buttonDiv__1ZR4G",
	"button": "space_button__1mK0N",
	"button2": "space_button2__1S43b",
	"divFillter": "space_divFillter__3TZMo",
	"div": "space_div__2xkVz",
	"falconId": "space_falconId__2pCAR",
	"label": "space_label__2q1wR",
	"p": "space_p__1IDlp"
};


/***/ }),

/***/ "v4kl":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Loader": "Spinner_Loader__1sjje",
	"load1": "Spinner_load1__2MbOe"
};


/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });