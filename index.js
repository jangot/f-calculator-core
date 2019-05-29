"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var listofvalue_1 = require("./listofvalue");
var spin_1 = require("./src/class/spin");
var jump_1 = require("./src/class/jump");
var road_1 = require("./src/class/road");
var spin = new spin_1.Spin(listofvalue_1.values);
spin
    .setType(spin_1.Spin.TYPES.USP)
    .setLevel(spin_1.Spin.LEVELS.LB);
console.log(spin.getValue());
var jump = new jump_1.Jump(listofvalue_1.values);
jump
    .setType(jump_1.Jump.TYPES.T)
    .setTurns(jump_1.Jump.TURNS.T1);
console.log(jump.getValue());
var road = new road_1.Road(listofvalue_1.values);
road
    .setType(road_1.Road.TYPES.ST_SQ)
    .setLevel(road_1.Road.LEVELS[road_1.Road.TYPES.ST_SQ].L1);
console.log(road.getValue());
