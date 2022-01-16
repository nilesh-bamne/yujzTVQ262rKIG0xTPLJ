webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/services.js":
/*!********************************!*\
  !*** ./components/services.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return services; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./utils/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _picture__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./picture */ "./components/picture.js");
var _jsxFileName = "/Users/nileshbamne/Documents/Clients/Nilesh Bamne/Agyaat Solutions/website/frontend/components/services.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var fetcher = function fetcher(url) {
  return unfetch__WEBPACK_IMPORTED_MODULE_3___default()(Object(_utils__WEBPACK_IMPORTED_MODULE_2__["GetURL"])("services")).then(function (r) {
    return r.json();
  });
};

function services(_ref) {
  var _this = this;

  var data = _ref.data;
  // const { data, error } = useSWR(GetURL("services"), fetcher);
  // if (error) return <div>failed to load</div>;
  // if (!data) return <div>loading...</div>;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("section", {
    id: "service",
    className: "my_services common",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "heading text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 15
    }
  }, __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, "What We Do ?"), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, "Our Services"), __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, "It is a long established fact that a reader will be of a page when established fact looking at its layout.")))))), __jsx("section", {
    className: "my_services",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row justify-content-center align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-md-6 col-lg-4 service-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, data.filter(function (c) {
    return c.side === "left";
  }).map(function (item) {
    return __jsx("div", {
      key: item.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "media-body text-right",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: "left hastext",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 25
      }
    }, __jsx("h4", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 27
      }
    }, item.title), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 27
      }
    }, " ", item.description, " ")), __jsx("div", {
      className: "icon right",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 25
      }
    }, __jsx("i", {
      className: item.icon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 27
      }
    }))));
  })), __jsx("div", {
    className: "col-md-12 col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "img_center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }, __jsx(_picture__WEBPACK_IMPORTED_MODULE_4__["default"], {
    imgSrc: " /static/images/img-1.webp",
    altSrc: " /static/images/img-1.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "col-md-6 col-lg-4 service-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, data.filter(function (c) {
    return c.side === "right";
  }).map(function (item) {
    return __jsx("div", {
      key: item.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "media-body",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: "left",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 25
      }
    }, __jsx("i", {
      className: item.icon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 27
      }
    })), __jsx("div", {
      className: "right hastext",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 25
      }
    }, __jsx("h4", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 27
      }
    }, item.title), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 27
      }
    }, item.description))));
  }))))));
}

/***/ })

})
//# sourceMappingURL=index.js.c0c0a22bc9ed6f7ab1d1.hot-update.js.map