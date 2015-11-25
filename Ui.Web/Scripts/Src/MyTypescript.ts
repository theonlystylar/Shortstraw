/// <reference path="../typings/jquery.d.ts" />

module App.Autos {
    export class Engine {
        start(callback: (startStatus: boolean, engineType: string) => void) {
            window.setTimeout(() => {
                callback(true, "V8");
            }, 1000);
        }
    }
}

module App.Autos {
    export class Car {

        private _engine: Engine;

        constructor(engine: Engine) {
            this.engine = engine; 
        }

        get engine(): Engine { return this._engine; }

        set engine(value: Engine) { this._engine = value; }
    }
}

import Autos = App.Autos;

window.onload = () => {
    var engine = new Autos.Engine();
    engine.start((startStatus, engineType) => {
        console.log(startStatus);
        console.log(engineType);
    });
    var car = new Autos.Car(engine);

}

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