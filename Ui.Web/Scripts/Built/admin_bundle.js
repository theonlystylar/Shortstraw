webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/jquery.d.ts" />
	var $ = __webpack_require__(1);
	var People = __webpack_require__(2);
	var Strings = __webpack_require__(3);
	var people = People.getAll();
	for (var i = 0; i < people.length; i++) {
	    console.log(Strings.cleanName(people[i].name));
	}
	window.onload = function () {
	    $("#mydiv").text("testing");
	};
	//# sourceMappingURL=admin.js.map

/***/ }
]);