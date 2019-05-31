import { Jump } from './class/jump';
import { Road } from './class/road';
import { Spin } from './class/spin';
import { values } from './data/listofvalue';

export default {
    Jump,
    Road,
    Spin,
    create: () => {
        return {
            road() {
                return new Road(values)
            },
            jump() {
                return new Jump(values);
            },
            spin() {
                return new Spin(values);
            }
        }
    }
};
