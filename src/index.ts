import { Jump } from './class/jump';
import { Road } from './class/road';
import { Spin } from './class/spin';
import { values, ValuesType } from './data/listofvalue';
import { Cascade, AvailableTypes } from './class/cascade';

export default {
    Jump,
    Road,
    Spin,
    Cascade,
    create: (val: ValuesType = values, cascadeTypes: AvailableTypes = {}) => {
        return {
            road() {
                return new Road(val)
            },
            jump() {
                return new Jump(val);
            },
            spin() {
                return new Spin(val);
            },
            cascade() {
                return new Cascade(val, cascadeTypes);
            }
        }
    }
};
