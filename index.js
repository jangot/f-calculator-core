"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var spin_1 = require("./src/class/spin");
var el = new spin_1.Spin(spin_1.Spin.TYPES[1]);
el.setLevel(spin_1.Spin.LEVELS[1]);
console.log(el.getValue());
