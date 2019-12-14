webpackHotUpdate("static\\development\\pages\\posts-page.js",{

/***/ "./redux/actions/postactions.js":
/*!**************************************!*\
  !*** ./redux/actions/postactions.js ***!
  \**************************************/
/*! exports provided: fetchPosts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPosts", function() { return fetchPosts; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./redux/types.js");

function fetchPosts() {
  console.log('fetch');
  return function (dispatch) {
    fetch('http://jsonplaceholder.typicode.com/posts').then(function (res) {
      return res.json();
    }).then(function (posts) {
      return dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_POSTS"],
        payload: posts
      });
    });
  };
}

/***/ })

})
//# sourceMappingURL=posts-page.js.2b6f1a5c5ff2c58c2193.hot-update.js.map