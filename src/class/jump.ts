import { AbstractFCElement } from './abstract-element';

export class Jump extends AbstractFCElement {

    static TURNS = [
        '1',
        '2',
        '3',
        '4'
    ];

    turns = '';

    setTurns(turns: string) {
        this.turns = turns;

        return this;
    }

    getKey(): string {
        const type = super.getKey();

        return type + this.turns;
    }
}
