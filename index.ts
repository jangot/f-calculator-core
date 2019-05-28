import { Spin } from './src/class/spin';
import { Jump } from './src/class/jump';

const spin = new Spin(Spin.TYPES[1]);
spin.setLevel(Spin.LEVELS[1]);


const jump = new Jump(Jump.TYPES[1]);
jump.setTurns(Jump.TURNS[3]);

console.log(spin.getValue());
console.log(jump.getValue());

