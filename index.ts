import { Spin } from './src/class/spin';
// import { Jump } from './src/class/jump';

const el = new Spin(Spin.TYPES[1]);

el.setLevel(Spin.LEVELS[1]);

console.log(el.getValue());

