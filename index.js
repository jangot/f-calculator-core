"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var listofvalue_1 = require("./listofvalue");
var spin_1 = require("./src/class/spin");
var jump_1 = require("./src/class/jump");
var spin = new spin_1.Spin(listofvalue_1.values);
spin
    .setType(spin_1.Spin.TYPES[1])
    .setLevel(spin_1.Spin.LEVELS[1]);
var jump = new jump_1.Jump(listofvalue_1.values);
jump
    .setType(jump_1.Jump.TYPES[1])
    .setTurns(jump_1.Jump.TURNS[3]);
console.log(spin.getValue());
console.log(jump.getValue());
