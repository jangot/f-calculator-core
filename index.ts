import { values } from './listofvalue';
import { Spin } from './src/class/spin';
import { Jump } from './src/class/jump';

const spin = new Spin(values);
spin
    .setType(Spin.TYPES[1])
    .setLevel(Spin.LEVELS[1]);


const jump = new Jump(values);
jump
    .setType(Jump.TYPES[1])
    .setTurns(Jump.TURNS[3]);

console.log(spin.getValue());
console.log(jump.getValue());

