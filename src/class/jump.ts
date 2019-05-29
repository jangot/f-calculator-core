import { AbstractFCElement } from './abstract-element';
import { KeyValue } from '../interface/key-value';

interface SpecialMarks {
    [key: string]: string[];
}

export class Jump extends AbstractFCElement {

    static TYPES: KeyValue<string> = {
        T: 't',
        S: 's',
        LO: 'lo',
        F: 'f',
        LZ: 'lz'
    };

    static TURNS: KeyValue<string> = {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4'
    };

    static HAS_ARRIS: KeyValue<boolean> = {
        [Jump.TYPES.LZ]: true,
        [Jump.TYPES.F]: true,
    };

    static NOT_FULL_SPINS: KeyValue<string> = {
        NONE: '',
        FIRST: '<',
        SECOND: '<<'
    };


    turns = '';
    arris = false;
    notFullSpin = '';

    setTurns(turns: string) {
        if (!Jump.TURNS[turns]) {
            this.throwSettingsFieldError(turns, Jump.TURNS);
        }
        this.turns = turns;

        return this;
    }



    getKey(): string {
        const type = super.getKey();

        let result = this.turns + type + this.notFullSpin;

        if (this.arris) {
            result += 'e';
        }

        return result;
    }

    setNotFullSpin(size: string = '') {
        if (!this.checkValueInList<string>(Jump.NOT_FULL_SPINS, size)) {
            this.throwSettingsFieldError<string>(size, Jump.NOT_FULL_SPINS);
        }

        this.notFullSpin = size;

        return this;
    }

    setArris(arris = true) {
        if (!Jump.HAS_ARRIS[this.type]) {
            this.throwSettingsFieldError<boolean>(this.type, Jump.HAS_ARRIS);
        }

        this.arris = arris;

        return this;
    }
}
