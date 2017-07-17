// import { Shape } from "./Shape";

// class Square implements Shape {
//     edge: number;
//     constructor(edge: number) {
//         this.edge = edge;
//     }
//     getArea(): number {
//         return this.edge * this.edge;
//     }
// }

import { Shape } from "./interfaces";

class Square implements Shape {
    edge: number;
    constructor(edge: number) {
        this.edge = edge;
    }
    getArea(): number {
        throw new Error("Method not implemented.");
    }
}
