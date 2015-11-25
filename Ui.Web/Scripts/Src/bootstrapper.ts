import Car = require("Car");
import Engine = require("Engine");

export function run() {
    var v8 = new Engine.V8();
    var car = new Car.Car(v8);
    car.engine.start();
    car.engine.stop();
}