import Engine = require("Engine");

export class Car {
    private _engine: Engine.IEngine;

    constructor(engine: Engine.IEngine) {
        this.engine = engine;
    }

    get engine(): Engine.IEngine { return this._engine; }

    set engine(value: Engine.IEngine) { this._engine = value; }
}