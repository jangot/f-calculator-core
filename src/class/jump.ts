import { AbstractFCElement } from './abstract-element';
import { KeyValue } from '../interface/key-value';

export class Jump extends AbstractFCElement {

    static TYPES: KeyValue<string> = {
        A: 'a',
        T: 't',
        S: 's',
        LO: 'lo',
        F: 'f',
        LZ: 'lz',
        EU: 'eu'
    };

    static TURNS: KeyValue<string> = {
        T1: '1',
        T2: '2',
        T3: '3',
        T4: '4'
    };

    static TURNS_FILTER: KeyValue<string[]> = {
        [Jump.TYPES.EU]: [Jump.TURNS.T1]
    };

    static HAS_ARRIS: KeyValue<boolean> = {
        [Jump.TYPES.LZ]: true,
        [Jump.TYPES.F]: true
    };

    static NOT_FULL_SPINS: KeyValue<string> = {
        NONE: '',
        FIRST: '<',
        SECOND: '<<'
    };

    turns = '';
    arris = false;
    notFullSpin = '';
    typeFilter: string[] = [];

    getAvailableTurns() {
        const turns = this.keyValueToValues(Jump.TURNS);

        if (!Jump.TURNS_FILTER[this.type]) {
            return turns;
        }

        return turns.filter((t) => {
            return Jump.TURNS_FILTER[this.type].indexOf(t) > -1;
        })
    }

    hasArris(): boolean {
        return !!Jump.HAS_ARRIS[this.type];
    }

    getAvailableNotFullSpin() {
        return this.keyValueToValues(Jump.NOT_FULL_SPINS);
    }

    setTurns(turns: string) {
        if (!this.checkValueInList<string>(Jump.TURNS, turns)) {
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

    setTypeFilter(filter: string[]) {
        this.typeFilter = filter;

        return this;
    }

    getAvailableTypes() {
        const types = super.getAvailableTypes();

        if (this.typeFilter.length === 0) {
            return types;
        }

        return types.filter((item) => {
            return this.typeFilter.indexOf(item) !== -1;
        });
    }
}
