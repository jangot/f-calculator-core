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
            throw Error(`There is not "${level}" in the Spin`);
        }
        this.level = level;

        return this;
    }

    getKey(): string {
        const type = super.getKey();

        return type + this.level;
    }
}
