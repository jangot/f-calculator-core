"use strict";
// import { values } from './listofvalue';
// import { Spin } from './src/class/spin';
// import { Jump } from './src/class/jump';
// import { Road } from './src/class/road';
//
// const spin = new Spin(values);
// spin
//     .setType(Spin.TYPES.USP)
//     .setLevel(Spin.LEVELS.LB);
// console.log(spin.getValue());
//
// const jump = new Jump(values);
// jump
//     .setType(Jump.TYPES.T)
//     .setTurns(Jump.TURNS.T1);
// console.log(jump.getValue());
//
// const road = new Road(values);
// road
//     .setType(Road.TYPES.ST_SQ)
//     .setLevel(Road.LEVELS[Road.TYPES.ST_SQ].L1);
// console.log(road.getValue());
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("./src/index"));
var road = index_1.default
    .create()
    .road()
    .setType(index_1.default.Road.TYPES.ST_SQ)
    .setLevel(index_1.default.Road.LEVELS[index_1.default.Road.TYPES.ST_SQ].LB);
console.log(road.getValue());
