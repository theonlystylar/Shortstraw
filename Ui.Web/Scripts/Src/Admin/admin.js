/// <reference path="../../typings/jquery.d.ts" />
var $ = require("jquery");
var People = require("../Data/People");
var Strings = require("../Common/Strings");
var people = People.getAll();
for (var i = 0; i < people.length; i++) {
    console.log(Strings.cleanName(people[i].name));
}
window.onload = function () {
    $("#mydiv").text("testing");
};
//# sourceMappingURL=admin.js.map