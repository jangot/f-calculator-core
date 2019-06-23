import { AbstractFCElement } from './abstract-element';
import { KeyValue } from '../interface/key-value';

export class Spin extends AbstractFCElement {

    static TYPES: KeyValue<string> = {
        USP: 'usp',
        LSP: 'lsp',
        CSP: 'csp',
        SSP: 'ssp',
        CUSP: 'cusp',
        CLSP: 'clsp',
        CCSP: 'ccsp',
        CSSP: 'cssp',
        COSP: 'cosp',
        CCOSP: 'ccosp'
    };

    static LEVELS: KeyValue<string> = {
        LB: 'b',
        L1: '1',
        L2: '2',
        L3: '3',
        L4: '4'
    };

    static HAS_ERROR: string[] = [
        Spin.TYPES.CUSP,
        Spin.TYPES.CLSP,
        Spin.TYPES.CCSP,
        Spin.TYPES.CSSP,
        Spin.TYPES.COSP,
        Spin.TYPES.CCOSP,
    ];

    level = '';
    error = '';
    f = '';

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

    setError(error: string = 'v') {
        this.error = error;

        return this;
    }

    setF(value = 'f') {
        this.f = value;

        return this;
    }

    hasError() {
        return Spin.HAS_ERROR.indexOf(this.type);
    }

    getKey(): string {
        if (!this.level) {
            this.throwGettingFieldError('level');
        }

        const type = super.getKey();

        return this.f + type + this.level + this.error;
    }

}
