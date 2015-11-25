define(["require", "exports", "Car", "Engine"], function (require, exports, Car, Engine) {
    function run() {
        var v8 = new Engine.V8();
        var car = new Car.Car(v8);
        car.engine.start();
        car.engine.stop();
    }
    exports.run = run;
});
//# sourceMappingURL=bootstrapper.js.map