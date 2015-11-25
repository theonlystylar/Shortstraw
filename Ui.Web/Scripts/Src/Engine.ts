export interface IEngine {
    start: () => void;
    stop: () => void;
}

export class V8 implements IEngine {
    start(): void {
        console.log("V8 Started");
    }

    stop(): void {
        console.log("V8 Stopped");
    }
} 