webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/posts.js":
/*!*****************************!*\
  !*** ./components/posts.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _redux_actions_postactions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../redux/actions/postactions */ "./redux/actions/postactions.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../redux/store */ "./redux/store.js");





var _jsxFileName = "C:\\Users\\sitekey\\Desktop\\admin-dashboard\\components\\posts.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;








var Posts =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Posts, _Component);

  function Posts(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Posts);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Posts).call(this, props));
    _this.state = {};
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Posts, [{
    key: "componentwillMount",
    value: function componentwillMount() {
      // let {users} = this.props;
      // this.setState({users});
      this.props.fetchPosts();
      console.log(this.props);
      console.log(this.props.posts);
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_6__["Provider"], {
        store: _redux_store__WEBPACK_IMPORTED_MODULE_10__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, this.props.posts.map(function (post, i) {
        return __jsx("div", {
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }, __jsx("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }, "Name : ", post.title, " "), __jsx("h4", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, "User Name : ", post.body), __jsx(Popup, {
          trigger: __jsx("button", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            },
            __self: this
          }, "update post"),
          position: "right center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }, __jsx("textarea", {
          value: user.username,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        })), __jsx("button", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }, "save")), __jsx("button", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }, " delete user"));
      }))));
    }
  }]);

  return Posts;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

Posts.PropTypes = {
  fetchPosts: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired,
  posts: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.array.isRequired // newUser: PropTypes.object 

};

var mapStateToProps = function mapStateToProps(state) {
  return {
    posts: state.users.posts // newUser: state.users.user

  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, {
  fetchPosts: _redux_actions_postactions__WEBPACK_IMPORTED_MODULE_8__["fetchPosts"]
})(Posts));

/***/ })

})
//# sourceMappingURL=index.js.cac770e0f8244ef09579.hot-update.js.map