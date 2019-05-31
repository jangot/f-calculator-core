import { AbstractFCElement } from './abstract-element';
import { KeyValue } from '../interface/key-value';

export class Spin extends AbstractFCElement {

    static TYPES: KeyValue<string> = {
        USP: 'usp',
        LSP: 'lsp',
        CSP: 'csp',
        SSP: 'ssp'
    };

    static LEVELS: KeyValue<string> = {
        LB: 'b',
        L1: '1',
        L2: '2',
        L3: '3',
        L4: '4'
    };

    level = '';

    getAvailableLevels() {
        return this.keyValueToValues(Spin.LEVELS);
    }

    setLevel(level: string) {
        if (!this.checkValueInList<string>(Spin.LEVELS, level)) {
            this.throwSettingsFieldError<string>(level, Spin.LEVELS);
        }

        this.level = level;

        return this;
    }

    getKey(): string {
        if (!this.level) {
            this.throwGettingFieldError('level');
        }

        const type = super.getKey();

        return type + this.level;
    }

}
