define(["require", "exports"], function (require, exports) {
    var V8 = (function () {
        function V8() {
        }
        V8.prototype.start = function () {
            console.log("V8 Started");
        };
        V8.prototype.stop = function () {
            console.log("V8 Stopped");
        };
        return V8;
    })();
    exports.V8 = V8;
});
//# sourceMappingURL=Engine.js.map