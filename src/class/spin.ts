import { AbstractFCElement } from './abstract-element';

export class Spin extends AbstractFCElement {
    static TYPES = [
        'usp',
        'lsp',
        'csp',
        'ssp'
    ];

    static LEVELS = [
        'b',
        '1',
        '2',
        '3',
        '4'
    ];

    level = '';

    setLevel(level: string) {
        if (Spin.LEVELS.indexOf(level) === -1) {
            this.throwSettingsFieldError(level, Spin.LEVELS);
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
