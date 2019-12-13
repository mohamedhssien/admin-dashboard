webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _comments__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./comments */ "./pages/comments.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var reactjs_popup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! reactjs-popup */ "./node_modules/reactjs-popup/reactjs-popup.es.js");








var _jsxFileName = "C:\\Users\\sitekey\\Desktop\\admin-dashboard\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;







var Index =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Index, _Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Index).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleChange", function (e, post) {
      post.body = e.target.value;

      _this.setState({
        updatedPost: post
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "submitPost", function () {
      _this.setState({
        editOne: null
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "deletePost", function (e, post, i) {
      var posts = _this.state.posts;
      console.log(post.id);
      posts.splice(i, 1);

      _this.setState({
        posts: posts
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "creatPost", function (e) {
      //const { newPost } = this.state.newPost
      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])({}, e.target.name, e.target.value));

      var id = _this.state.id;
      var title = _this.state.title;
      var body = _this.state.body;
      var newPost = {
        id: id,
        title: title,
        body: body
      };

      _this.setState({
        newPost: newPost
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "buCreatePost", function (event) {
      event.preventDefault();
      var _this$state = _this.state,
          Posts = _this$state.Posts,
          newPost = _this$state.newPost;
      Posts.push(newPost);
      console.log(newPost);
    });

    _this.state = {
      posts: [],
      title: null,
      body: null,
      id: null,
      newPost: {
        title: null,
        body: null,
        id: null
      },
      editOne: null,
      updatedPost: null,
      showCreatePostForm: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var posts = this.props.posts;
      this.setState({
        posts: posts
      });
    }
  }, {
    key: "updatePost",
    value: function updatePost(post) {
      var editOne = this.state.editOne;
      this.setState({
        editOne: post.id
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          editOne = _this$state2.editOne,
          posts = _this$state2.posts,
          updatedPost = _this$state2.updatedPost;
      console.log('uuuuuu', updatedPost);
      return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, __jsx("div", {
        style: {
          position: "absolute",
          width: "300px",
          height: "120px",
          marginLeft: '50%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, __jsx("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, " create new post "), __jsx("form", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, __jsx("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, "id"), __jsx("input", {
        type: "text",
        name: "id",
        onChange: function onChange(e) {
          _this2.creatPost(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }), __jsx("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "title"), __jsx("input", {
        type: "text",
        name: "title",
        onChange: function onChange(e) {
          _this2.creatPost(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }), __jsx("textarea", {
        name: "body",
        onChange: function onChange(e) {
          _this2.creatPost(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }), __jsx("input", {
        type: "submit",
        value: "Submit",
        onClick: this.buCreatePost,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }))), __jsx("div", {
        style: {
          position: "absolute",
          width: "300px",
          height: "120px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, posts.map(function (post, i) {
        return __jsx("div", {
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          },
          __self: this
        }, __jsx("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          },
          __self: this
        }, post.title, " "), __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          },
          __self: this
        }, post.body), __jsx(reactjs_popup__WEBPACK_IMPORTED_MODULE_13__["default"], {
          trigger: __jsx("button", {
            onClick: function onClick() {
              return _this2.updatePost(post);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 110
            },
            __self: this
          }, "update"),
          position: "right center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          },
          __self: this
        }, __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          },
          __self: this
        }, __jsx("textarea", {
          onChange: function onChange(e) {
            return _this2.handleChange(e, post);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          __self: this
        }, post.body)), __jsx("button", {
          onClick: _this2.submitPost,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          },
          __self: this
        }, "save")), __jsx("button", {
          onClick: function onClick(e) {
            return _this2.deletePost(e, post, i);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          },
          __self: this
        }, " delete "));
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps() {
      var res, data;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getInitialProps$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch('http://jsonplaceholder.typicode.com/posts'));

            case 2:
              res = _context.sent;
              _context.next = 5;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

            case 5:
              data = _context.sent;
              return _context.abrupt("return", {
                posts: data
              });

            case 7:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.7720ee588ba6942ac92b.hot-update.js.map