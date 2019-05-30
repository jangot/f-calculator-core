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

import calc from './src/index';

const road = calc
    .create()
    .road()
    .setType(calc.Road.TYPES.ST_SQ)
    .setLevel(calc.Road.LEVELS[calc.Road.TYPES.ST_SQ].LB);

console.log(road.getValue());

