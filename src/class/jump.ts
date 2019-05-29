import { AbstractFCElement } from './abstract-element';

export class Jump extends AbstractFCElement {

    static TYPES = [
        't',
        's',
        'lo',
        'f',
        'lz'
    ];

    static TURNS = [
        '1',
        '2',
        '3',
        '4',
        '5'
    ];

    turns = '';

    setTurns(turns: string) {
        if (Jump.TURNS.indexOf(turns) === -1) {
            this.throwSettingsFieldError(turns, Jump.TURNS);
        }
        this.turns = turns;

        return this;
    }

    getKey(): string {
        const type = super.getKey();

        return this.turns + type;
    }
}
