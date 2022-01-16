webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/testimonials.js":
/*!************************************!*\
  !*** ./components/testimonials.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return testimonials; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./utils/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ "./node_modules/react-responsive-carousel/lib/styles/carousel.min.css");
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-responsive-carousel */ "./node_modules/react-responsive-carousel/lib/es/index.js");
var _this = undefined,
    _jsxFileName = "/Users/nileshbamne/Documents/Clients/Nilesh Bamne/Agyaat Solutions/website/frontend/components/testimonials.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 // requires a loader



var starItem = function starItem(id) {
  return __jsx("li", {
    key: id,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("a", {
    href: "#",
    rel: "noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("i", {
    className: "fa fa-star",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  })));
};

var renderStar = function renderStar(count) {
  var rows = [];

  for (var i = 0; i <= count - 1; i++) {
    rows.push(starItem(i));
  }

  return rows;
};

var renderConainer = function renderConainer(item) {
  if (item === undefined) return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 34
    }
  });
  return __jsx("div", {
    key: item.id,
    className: "col-md-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "test_inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "testimonial_shape",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "test_img",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "".concat(item.image.url),
    className: "img-responsive",
    alt: "img",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "testimonial_inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, item.name), __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, item.title), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, item.description), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, renderStar(item.stars)), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, item.name))));
};

function testimonials(_ref) {
  var _this2 = this;

  var data = _ref.data;

  // const [data, setData] = useState([]);
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      testimonials = _useState[0],
      setTestimonials = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var newData = [];
    var count = 0;

    for (var i = 0; i < data.length;) {
      newData.push({
        id: count++,
        values: [data[i++], data[i++]]
      });
    }

    setTestimonials(newData);
  }, [data]); // const { error } = useSWR(GetURL("testimonials"), (url) => {
  //   fetch(GetURL("testimonials"))
  //     .then((r) => r.json())
  //     .then((data) => {
  //       let newData = [];
  //       let count = 0;
  //       for (var i = 0; i < data.length; ) {
  //         newData.push({ id: count++, values: [data[i++], data[i++]] });
  //       }
  //       setData(newData);
  //     })
  //     .catch((error) => console.log(error.message));
  // });
  // if (error) return <div>failed to load</div>;
  // if (!data) return <div>loading...</div>;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("section", {
    id: "testi",
    className: "common",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "heading text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 15
    }
  }, __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }, "What Think Client About Us?"), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }, "Testimonial")))))), __jsx("section", {
    className: "testimonial",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }, __jsx(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_5__["Carousel"], {
    autoPlay: true,
    infiniteLoop: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }, testimonials.map(function (item) {
    return __jsx("div", {
      key: item.id,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 17
      }
    }, renderConainer(item.values[0]), renderConainer(item.values[1]));
  }))))));
}

/***/ })

})
//# sourceMappingURL=index.js.b6db884d9f64dcd1cc28.hot-update.js.map