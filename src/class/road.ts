import { AbstractFCElement } from './abstract-element';
import { KeyValue } from '../interface/key-value';

interface level extends KeyValue<string> {}

export class Road extends AbstractFCElement {
    static TYPES: KeyValue<string> = {
        ST_SQ: 'stsq',
        CH_SQ: 'chsq'
    };

    static LEVELS: KeyValue<level> = {
        [Road.TYPES.ST_SQ]: {
            LB: 'b',
            L1: '1',
            L2: '2',
            L3: '3',
            L4: '4'
        },
        [Road.TYPES.CH_SQ]: {
            L1: '1'
        }
    };

    level = '';

    setLevel(level: string) {
        const levels = Road.LEVELS[this.type];

        if (!this.checkValueInList<string>(levels, level)) {
            this.throwSettingsFieldError<string>(level, levels);
        }

        this.level = level;

        return this;
    }

    getKey() {
        const type = super.getKey();

        return type + this.level;
    }
}
