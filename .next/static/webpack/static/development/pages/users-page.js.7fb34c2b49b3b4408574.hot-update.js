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







var _jsxFileName = "C:\\Users\\sitekey\\Desktop\\admin-dashboard\\components\\users.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;





 // import { CreateUsers } from '../redux/actions/userActions'



var Users =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Users, _Component);

  function Users(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Users);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Users).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleChange", function (e, user) {
      user.username = e.target.value; //console.log( user )

      _this.setState({
        last_edited_user: user
      }); //    const  last_edited_user = user


      console.log(_this.state.last_edited_user); //    const lastapp = this.state.last_edited_user
      //    this.props.CreateUsers(lastapp)
    });

    _this.state = {
      last_edited_user: null
    }; // this.state = {
    //     users: [],
    //     last_edited_user: null,
    //     showCreateUserForm: false,
    //     id: null,
    //     name: null,
    //     username: null,
    //     newUser: {
    //         id: null,
    //         name: null,
    //         username: null
    //     }

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Users, [{
    key: "componentDidllMount",
    value: function componentDidllMount() {
      // let {users} = this.props;
      // this.setState({users});
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
    } // static async getInitialProps(){
    //     const res = await fetch('http://jsonplaceholder.typicode.com/users');
    //     const data = await res.json();
    //     return { users: data }
    // }

  }, {
    key: "render",
    // deleteUser = (e, user, i) => {
    //     const { users } = this.state
    //     console.log(user.id)
    //     users.splice(i, 1);
    //     this.setState({ users: users })
    // } 
    // handleCreatUser = (e) => {
    //     //const { newUser } = this.state
    //     this.setState({ [e.target.name] : e.target.value })
    //     const newUser = {
    //         id: this.state.id,
    //         name: this.state.name,
    //         username: this.state.username
    //     }
    //     this.setState({ newUser : newUser })
    // }
    // buCreateUser = (event) => {
    //     event.preventDefault();
    //     const { newUser, users } = this.state
    //     users.push(newUser)
    //     this.setState({ users })
    //     console.log(newUser)
    //  }
    value: function render() {
      var _this2 = this;

      // let { users } = this.state
      // console.log(users)
      // return (
      //     <Layout>
      //     <div style={  {position : "absolute", width: "300px",height: "120px", marginLeft: '50%', padding: '100px'}  }>   
      //      <button onClick={ ()=>{ this.setState({ showCreateUserForm: true }) } }> create new User </button>
      //     { this.state.showCreateUserForm  && <form >
      //        <label >id</label><input  type="text" name="id" onChange={(e)=>{ this.handleCreatUser(e) }}  /><br></br>
      //         <label >Name</label><input  type="text" name="name" onChange={(e)=>{ this.handleCreatUser(e) }}   />
      //         <label >User Name</label><input  type="text" name="username" onChange={(e)=>{ this.handleCreatUser(e) }}   />
      //         <input type="submit" value="Submit"  onClick={ this.buCreateUser } />
      //        </form> }
      //     </div>  
      //         {
      //                 users.map((user, i) => (
      //                     <div  key={i} >
      //                     <h3 >Name : {user.name} </h3>
      //                     <h4 >User Name : {user.username}</h4>
      //     <Popup trigger={<button >update user name</button>}
      //         position="right center">
      //         <div>
      //             <textarea onChange={(e) =>  this.handleChange(e, user) }>{user.username}</textarea>
      //         </div>
      //             <button >save</button>
      //     </Popup>
      //     <button onClick={ (e) => this.deleteUser(e, user, i) }> delete user</button>    
      //    </div>
      //             ))
      //         }
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, __jsx(_userForm__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }), this.props.users.map(function (user, i) {
        return __jsx("div", {
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130
          },
          __self: this
        }, __jsx("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131
          },
          __self: this
        }, "Name : ", user.name, " "), __jsx("h4", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          },
          __self: this
        }, "User Name : ", user.username), __jsx(reactjs_popup__WEBPACK_IMPORTED_MODULE_9__["default"], {
          trigger: __jsx("button", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 134
            },
            __self: this
          }, "update user name"),
          position: "right center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          },
          __self: this
        }, __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136
          },
          __self: this
        }, __jsx("textarea", {
          onChange: function onChange(e) {
            return _this2.handleChange(e, user);
          },
          value: user.username,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 137
          },
          __self: this
        })), __jsx("button", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139
          },
          __self: this
        }, "save")), __jsx("button", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142
          },
          __self: this
        }, " delete user"));
      }));
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

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Backdrop/Backdrop.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Backdrop/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Dialog/Dialog.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Dialog/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/DialogActions/DialogActions.js":
false,

/***/ "./node_modules/@material-ui/core/esm/DialogActions/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/DialogContent/DialogContent.js":
false,

/***/ "./node_modules/@material-ui/core/esm/DialogContent/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/DialogContentText/DialogContentText.js":
false,

/***/ "./node_modules/@material-ui/core/esm/DialogContentText/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/DialogTitle/DialogTitle.js":
false,

/***/ "./node_modules/@material-ui/core/esm/DialogTitle/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Fade/Fade.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Fade/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/FilledInput/FilledInput.js":
false,

/***/ "./node_modules/@material-ui/core/esm/FilledInput/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/FormControl/FormControl.js":
false,

/***/ "./node_modules/@material-ui/core/esm/FormControl/FormControlContext.js":
false,

/***/ "./node_modules/@material-ui/core/esm/FormControl/formControlState.js":
false,

/***/ "./node_modules/@material-ui/core/esm/FormControl/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/FormControl/useFormControl.js":
false,

/***/ "./node_modules/@material-ui/core/esm/FormHelperText/FormHelperText.js":
false,

/***/ "./node_modules/@material-ui/core/esm/FormHelperText/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/FormLabel/FormLabel.js":
false,

/***/ "./node_modules/@material-ui/core/esm/FormLabel/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Grow/Grow.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Grow/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Input/Input.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Input/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/InputBase/InputBase.js":
false,

/***/ "./node_modules/@material-ui/core/esm/InputBase/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/InputBase/utils.js":
false,

/***/ "./node_modules/@material-ui/core/esm/InputLabel/InputLabel.js":
false,

/***/ "./node_modules/@material-ui/core/esm/InputLabel/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/List/List.js":
false,

/***/ "./node_modules/@material-ui/core/esm/List/ListContext.js":
false,

/***/ "./node_modules/@material-ui/core/esm/List/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Menu/Menu.js":
false,

/***/ "./node_modules/@material-ui/core/esm/MenuList/MenuList.js":
false,

/***/ "./node_modules/@material-ui/core/esm/MenuList/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Modal/Modal.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Modal/ModalManager.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Modal/SimpleBackdrop.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Modal/TrapFocus.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Modal/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/NativeSelect/NativeSelect.js":
false,

/***/ "./node_modules/@material-ui/core/esm/NativeSelect/NativeSelectInput.js":
false,

/***/ "./node_modules/@material-ui/core/esm/OutlinedInput/NotchedOutline.js":
false,

/***/ "./node_modules/@material-ui/core/esm/OutlinedInput/OutlinedInput.js":
false,

/***/ "./node_modules/@material-ui/core/esm/OutlinedInput/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Popover/Popover.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Popover/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Portal/Portal.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Portal/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Select/Select.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Select/SelectInput.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Select/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/TextField/TextField.js":
false,

/***/ "./node_modules/@material-ui/core/esm/TextField/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/TextareaAutosize/TextareaAutosize.js":
false,

/***/ "./node_modules/@material-ui/core/esm/TextareaAutosize/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/internal/svg-icons/ArrowDropDown.js":
false,

/***/ "./node_modules/@material-ui/core/esm/internal/svg-icons/createSvgIcon.js":
false,

/***/ "./node_modules/@material-ui/core/esm/transitions/utils.js":
false,

/***/ "./node_modules/@material-ui/core/esm/utils/createChainedFunction.js":
false,

/***/ "./node_modules/@material-ui/core/esm/utils/debounce.js":
false,

/***/ "./node_modules/@material-ui/core/esm/utils/getScrollbarSize.js":
false,

/***/ "./node_modules/@material-ui/core/esm/utils/isMuiElement.js":
false,

/***/ "./node_modules/@material-ui/core/esm/utils/ownerDocument.js":
false,

/***/ "./node_modules/@material-ui/core/esm/utils/ownerWindow.js":
false

})
//# sourceMappingURL=users-page.js.7fb34c2b49b3b4408574.hot-update.js.map