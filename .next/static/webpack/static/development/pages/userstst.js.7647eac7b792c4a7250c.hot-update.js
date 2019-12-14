webpackHotUpdate("static\\development\\pages\\userstst.js",{

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

      var last_edited_user = user;
      console.log(last_edited_user);
    });

    _this.state = {}; // this.state = {
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
    key: "componentDidMount",
    value: function componentDidMount() {
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
        this.props.users.push(nextProps.newUser);
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
          lineNumber: 123
        },
        __self: this
      }, __jsx(_userForm__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }), this.props.users.map(function (user, i) {
        return __jsx("div", {
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          },
          __self: this
        }, __jsx("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128
          },
          __self: this
        }, "Name : ", user.name, " "), __jsx("h4", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          },
          __self: this
        }, "User Name : ", user.username), __jsx(reactjs_popup__WEBPACK_IMPORTED_MODULE_9__["default"], {
          trigger: __jsx("button", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 131
            },
            __self: this
          }, "update user name"),
          position: "right center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131
          },
          __self: this
        }, __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          },
          __self: this
        }, __jsx("textarea", {
          onChange: function onChange(e) {
            return _this2.handleChange(e, user);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          },
          __self: this
        }, user.username)), __jsx("button", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136
          },
          __self: this
        }, "save")), __jsx("button", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139
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

/***/ })

})
//# sourceMappingURL=userstst.js.7647eac7b792c4a7250c.hot-update.js.map