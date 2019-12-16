webpackHotUpdate("static\\development\\pages\\posts-page.js",{

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout */ "./components/layout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var reactjs_popup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactjs-popup */ "./node_modules/reactjs-popup/reactjs-popup.es.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_postActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../redux/actions/postActions */ "./redux/actions/postActions.js");
/* harmony import */ var _postForm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./postForm */ "./components/postForm.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ "./node_modules/@material-ui/core/esm/DialogContentText/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/icons/Edit */ "./node_modules/@material-ui/icons/Edit.js");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/Fab */ "./node_modules/@material-ui/core/esm/Fab/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");







var _jsxFileName = "C:\\Users\\sitekey\\Desktop\\admin-dashboard\\components\\posts.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;



 // import PropTypes from 'prop-types'; 

















var Posts =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Posts, _Component);

  function Posts(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Posts);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Posts).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleChange", function (e, post) {
      post.body = e.target.value;

      _this.setState({
        last_edited_post: post
      });

      console.log(_this.state.last_edited_post);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "deletePost", function (e, post, i) {
      console.log(i);
      console.log(_this.props.posts);

      _this.props.posts.splice(i, 1);

      console.log(_this.props.posts);

      _this.setState({
        posts: _this.props.users
      });

      console.log(_this.state.users);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleClose", function () {
      _this.setState({
        open: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "updatePost", function (e, post) {
      _this.setState({
        open: true
      });

      console.log(post.id);

      _this.setState({
        currentPostBody: post.body
      });

      console.log(post);

      _this.props.posts.push(post);

      _this.setState({
        posts: _this.props.posts
      });
    });

    _this.state = {
      posts: [],
      currentPostBody: '',
      last_edited_post: null,
      open: false,
      setOpen: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Posts, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchPosts();
      console.log(this.props.posts); //  this.setState({ users: this.props.users })
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {// if(nextProps.newUser){
      //     console.log(nextProps.newUser)
      //     this.props.users.unshift(nextProps.newUser)
      // }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["Grid"], {
        container: true,
        style: {
          marginTop: 50
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["Grid"], {
        item: true,
        sm: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, this.props.posts.map(function (post, i) {
        return __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_25__["default"], {
          key: i,
          component: "span",
          display: "block",
          p: 1,
          m: 1,
          bgcolor: "#e0e0e0",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_25__["default"], {
          p: 1,
          m: 1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        }, __jsx("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        }, " ", post.title, " ")), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_25__["default"], {
          p: 1,
          m: 1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          },
          __self: this
        }, " ", post.body), __jsx(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_23__["default"], {
          color: "primary",
          "aria-label": "edit",
          onClick: function onClick(e) {
            return _this2.updatePost(e, post);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          },
          __self: this
        }, __jsx(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_21___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: this
        })), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_15__["default"], {
          open: _this2.state.open,
          onClose: _this2.handleClose,
          "aria-labelledby": "form-dialog-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          },
          __self: this
        }, __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_19__["default"], {
          id: "form-dialog-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          },
          __self: this
        }, "change post body "), __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          },
          __self: this
        }, __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_17__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          },
          __self: this
        }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_14__["default"], {
          onChange: function onChange(e) {
            return _this2.handleChange(e, post);
          },
          margin: "dense",
          name: "post body",
          defaultValue: _this2.state.currentPostBody,
          multiline: true,
          rows: "10",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          },
          __self: this
        }))), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_16__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          },
          __self: this
        }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
          onClick: _this2.handleClose,
          color: "primary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          },
          __self: this
        }, "Cancel"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
          onClick: _this2.handleClose,
          color: "primary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124
          },
          __self: this
        }, "save"))), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
          variant: "contained",
          color: "secondary",
          startIcon: __jsx(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_22___default.a, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 132
            },
            __self: this
          }),
          onClick: function onClick(e) {
            return _this2.deletePost(e, post, i);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          },
          __self: this
        }, "Delete"));
      })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["Grid"], {
        item: true,
        sm: true,
        bgcolor: "e0e0e0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_25__["default"], {
        component: "span",
        display: "block",
        p: 1,
        m: 1,
        bgcolor: "#e0e0e0",
        height: "98%",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, __jsx(Userform, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }))));
    }
  }]);

  return Posts;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]); // Users.propTypes = {
//     fetchUsers: PropTypes.func.isRequired,
//     users: PropTypes.array.isRequired,
//     newUser: PropTypes.object 
// }


var mapStateToProps = function mapStateToProps(state) {
  return {
    posts: state.posts.posts // newUser: state.users.user

  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, {
  fetchPosts: _redux_actions_postActions__WEBPACK_IMPORTED_MODULE_11__["fetchPosts"]
})(Posts));

/***/ })

})
//# sourceMappingURL=posts-page.js.73cfa8f336367c5b6a99.hot-update.js.map