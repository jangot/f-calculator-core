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

const road = calc.create().road();
const types = road.getAvailableTypes();
road.setType(types[0]);

const levels = road.getAvailableLevels();

road.setLevel(levels[0]);

console.log('road', road.getValue());

const cascade = calc.create().cascade();
const fJump = cascade.addJump();
const fAvTypes = fJump.getAvailableTypes();
const fAvTurns = fJump.getAvailableTurns();

fJump
    .setType(fAvTypes[0])
    .setTurns(fAvTurns[0]);

const sJump = cascade.addJump();
const sAvTypes = sJump.getAvailableTypes();
const sAvTurns = sJump.getAvailableTurns();

sJump
    .setType(sAvTypes[0])
    .setTurns(sAvTurns[1]);
console.log('cascade', cascade.getValue());



