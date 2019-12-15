webpackHotUpdate("static\\development\\pages\\users-page.js",{

/***/ "./components/users.js":
/*!*****************************!*\
  !*** ./components/users.js ***!
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _redux_actions_userActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../redux/actions/userActions */ "./redux/actions/userActions.js");
/* harmony import */ var _userForm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./userForm */ "./components/userForm.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ "./node_modules/@material-ui/core/esm/DialogContentText/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/icons/Edit */ "./node_modules/@material-ui/icons/Edit.js");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/Fab */ "./node_modules/@material-ui/core/esm/Fab/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");







var _jsxFileName = "C:\\Users\\sitekey\\Desktop\\admin-dashboard\\components\\users.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;





















var Users =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Users, _Component);

  function Users(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Users);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Users).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleChange", function (e, user) {
      user.username = e.target.value;

      _this.setState({
        last_edited_user: user
      });

      console.log(_this.state.last_edited_user);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "deleteUser", function (e, user, i) {
      // const { users } = this.state
      console.log(user.id); // users.splice(i, 1);
      // this.setState({ users: users })
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleClickOpen", function () {
      _this.setState({
        open: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleClose", function () {
      _this.setState({
        open: false
      });
    });

    _this.state = {
      last_edited_user: null,
      open: false,
      setOpen: false,
      currentUser: ''
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Users, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchUsers();
      console.log(this.props.users);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.newUser) {
        console.log(nextProps.newUser);
        this.props.users.unshift(nextProps.newUser);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["Grid"], {
        container: true,
        style: {
          marginTop: 50
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["Grid"], {
        item: true,
        sm: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, this.props.users.map(function (user, i) {
        return (// <Box component="span" display="block" p={1} m={1} bgcolor="background.paper">
          //     block
          // </Box>
          __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_26__["default"], {
            key: i,
            component: "span",
            display: "block",
            p: 1,
            m: 1,
            bgcolor: "#e0e0e0",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 106
            },
            __self: this
          }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_26__["default"], {
            p: 1,
            m: 1,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 107
            },
            __self: this
          }, "Name: ", user.name, " "), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_26__["default"], {
            p: 1,
            m: 1,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 108
            },
            __self: this
          }, "User Name: ", user.username), __jsx(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_24__["default"], {
            color: "primary",
            "aria-label": "edit",
            onClick: _this2.handleClickOpen,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 112
            },
            __self: this
          }, __jsx(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_22___default.a, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 113
            },
            __self: this
          })), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_16__["default"], {
            open: _this2.state.open,
            onClose: _this2.handleClose,
            "aria-labelledby": "form-dialog-title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 115
            },
            __self: this
          }, __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_20__["default"], {
            id: "form-dialog-title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 116
            },
            __self: this
          }, "user name "), __jsx("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 117
            },
            __self: this
          }, __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_18__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 118
            },
            __self: this
          }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_15__["default"], {
            onChange: function onChange(e) {
              return _this2.handleChange(e, user);
            },
            autoFocus: true,
            margin: "dense",
            value: user.username,
            fullWidth: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 119
            },
            __self: this
          }))), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_17__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 127
            },
            __self: this
          }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
            onClick: _this2.handleClose,
            color: "primary",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 128
            },
            __self: this
          }, "Cancel"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
            onClick: _this2.handleClose,
            color: "primary",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 131
            },
            __self: this
          }, "save"))), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
            variant: "contained",
            color: "secondary" //  className={classes.button}
            ,
            startIcon: __jsx(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_23___default.a, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 140
              },
              __self: this
            }),
            onClick: function onClick(e) {
              return _this2.deleteUser(e, user, i);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 136
            },
            __self: this
          }, "Delete"))
        );
      })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["Grid"], {
        item: true,
        sm: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_26__["default"], {
        component: "span",
        display: "block",
        p: 1,
        m: 1,
        bgcolor: "#e0e0e0",
        height: "98%",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, __jsx(_userForm__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }))));
    }
  }]);

  return Users;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

Users.PropTypes = {
  fetchUsers: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func.isRequired,
  users: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.array.isRequired,
  newUser: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.object
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    users: state.users.users,
    newUser: state.users.user
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, {
  fetchUsers: _redux_actions_userActions__WEBPACK_IMPORTED_MODULE_12__["fetchUsers"]
})(Users));

/***/ })

})
//# sourceMappingURL=users-page.js.0fce8ff71d9b7c7825f7.hot-update.js.map