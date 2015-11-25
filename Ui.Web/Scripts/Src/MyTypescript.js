/// <reference path="../typings/jquery.d.ts" />
var App;
(function (App) {
    var Autos;
    (function (Autos) {
        var Engine = (function () {
            function Engine() {
            }
            Engine.prototype.start = function (callback) {
                window.setTimeout(function () {
                    callback(true, "V8");
                }, 1000);
            };
            return Engine;
        })();
        Autos.Engine = Engine;
    })(Autos = App.Autos || (App.Autos = {}));
})(App || (App = {}));
var App;
(function (App) {
    var Autos;
    (function (Autos) {
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
        Autos.Car = Car;
    })(Autos = App.Autos || (App.Autos = {}));
})(App || (App = {}));
var Autos = App.Autos;
window.onload = function () {
    var engine = new Autos.Engine();
    engine.start(function (startStatus, engineType) {
        console.log(startStatus);
        console.log(engineType);
    });
    var car = new Autos.Car(engine);
};
//class Car {
//    private _engine: Engine;
//    constructor(_engine: Engine) {
//        this._engine = _engine;
//        $("#mydiv").html("testing");
//    }
//    get _engine(): Engine {
//        return this._engine;
//    }
//    set _engine(value: Engine) {
//        if (value === undefined) throw "Please supply an _engine";
//        this._engine = value;
//    }
//}
//window.onload = () => {
//    var _engine = new Engine(300, "V12");
//    var myCar = new Car(_engine);
//    console.log(myCar._engine);
//}
//class Car {
//    private _engine: string;
//    constructor(_engine: string) {
//        this._engine = _engine;
//    }
//    start() {
//        alert(`_engine started ${this._engine}`);
//    }
//    stop() {
//        alert(`_engine stopped ${this._engine}`);
//    }
//    getSpeed(type: number): number {
//        return type;
//    }
//}
//class Engine {
//}
////window.onload = () => {
////    var car = new Car("V8");
////    car.start();
////    car.stop();
////};
//var type = 2; 
//var myObject: Object;
//myObject = () => {}
//module MyModule {
//    var person: string;
//}
//window.onload = () => {
//    $("#mydiv").html("hello sucker!");
//} 
//# sourceMappingURL=MyTypescript.js.map