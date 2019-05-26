import { Spin } from './src/class/spin';

const el = new Spin(Spin.TYPES[1]);

el.setLevel(Spin.LEVELS[1]);

console.log(el.getValue());

