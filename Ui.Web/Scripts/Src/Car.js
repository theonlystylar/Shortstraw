define(["require", "exports"], function (require, exports) {
    var Car = (function () {
        function Car(engine) {
            this.engine = engine;
        }
        Object.defineProperty(Car.prototype, "engine", {
            get: function () { return this._engine; },
            set: function (value) { this._engine = value; },
            enumerable: true,
            configurable: true
        });
        return Car;
    })();
    exports.Car = Car;
});
//# sourceMappingURL=Car.js.map