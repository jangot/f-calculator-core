import { Jump } from './class/jump';
import { Road } from './class/road';
import { Spin } from './class/spin';
import { values, ValuesType } from './data/listofvalue';
import { Cascade } from './class/cascade';

export default {
    Jump,
    Road,
    Spin,
    Cascade,
    create: (data: ValuesType = values) => {
        return {
            road() {
                return new Road(data)
            },
            jump() {
                return new Jump(data);
            },
            spin() {
                return new Spin(data);
            },
            cascade() {
                return new Cascade(data);
            }
        }
    }
};
