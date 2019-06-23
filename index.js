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
var road = index_1.default.create().road();
var types = road.getAvailableTypes();
road.setType(types[0]);
var levels = road.getAvailableLevels();
road.setLevel(levels[0]);
console.log('road', road.getValue());
var cascade = index_1.default.create().cascade();
var fJump = cascade.addJump();
var fAvTypes = fJump.getAvailableTypes();
var fAvTurns = fJump.getAvailableTurns();
fJump
    .setType(fAvTypes[0])
    .setTurns(fAvTurns[0]);
var sJump = cascade.addJump();
var sAvTypes = sJump.getAvailableTypes();
var sAvTurns = sJump.getAvailableTurns();
sJump
    .setType(sAvTypes[0])
    .setTurns(sAvTurns[1]);
console.log('cascade', cascade.getValue());
