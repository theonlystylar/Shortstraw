/// <reference path="../../typings/jquery.d.ts" />

import $ = require("jquery");
import People = require("../Data/People");
import Strings = require("../Common/Strings");

var people = People.getAll();

for (var i = 0; i < people.length; i++) {
    console.log(Strings.cleanName(people[i].name)); 
}

window.onload = () => {
    $("#mydiv").text("testing");
};