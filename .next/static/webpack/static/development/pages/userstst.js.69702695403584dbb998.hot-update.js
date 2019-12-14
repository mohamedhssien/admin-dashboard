webpackHotUpdate("static\\development\\pages\\userstst.js",{

/***/ "./redux/actions/userActions.js":
/*!**************************************!*\
  !*** ./redux/actions/userActions.js ***!
  \**************************************/
/*! exports provided: fetchUsers, CreateUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUsers", function() { return fetchUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUsers", function() { return CreateUsers; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./redux/types.js");

 // import { last_updated_user } from "../../components/users";

function fetchUsers() {
  return function (dispatch) {
    //console.log('fetching')
    fetch('http://jsonplaceholder.typicode.com/users').then(function (res) {
      return res.json();
    }).then(function (users) {
      return dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_USERS"],
        payload: users
      });
    });
  };
}
function CreateUsers(users) {
  return function (dispatch) {
    console.log('action called');
    fetch('http://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(users)
    }).then(function (res) {
      return res.json();
    }).then(function (user) {
      return dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["NEW_USERS"],
        payload: user
      });
    });
  };
}

/***/ })

})
//# sourceMappingURL=userstst.js.69702695403584dbb998.hot-update.js.map