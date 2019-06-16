import { AbstractFCElement } from './abstract-element';
import { Jump } from './jump';
import { KeyValue } from '../interface/key-value';

type LastLevel = KeyValue<string[]>;
export type AvailableTypes = KeyValue<LastLevel>;

export class Cascade extends AbstractFCElement{

    static AVAILABLE_TYPES: AvailableTypes = {
        [Jump.TYPES.A]: {
            [Jump.TYPES.A]: [],
            [Jump.TYPES.T]: [],
            [Jump.TYPES.LO]: [],
            [Jump.TYPES.EU]: [],
        }
    };

    jumps: Jump[] = [];
    availableTypes: AvailableTypes = {};

    constructor(data: KeyValue<number>, availableTypes: AvailableTypes) {
        super(data);

        this.availableTypes = availableTypes;
    }

    getKey() {
        return this.jumps
            .map((jump) => jump.getKey())
            .join('+');
    }

    addJump(): Jump {
        if (this.jumps.length > 2) {
            throw Error('Too much jumps');
        }

        this.jumps.push(new Jump(this.data));

        return this.jumps[this.jumps.length - 1];
    }

    protected getNextTypes(): string[] {
        switch (this.jumps.length) {
            case 1:
                const type = this.getJump().getType();
                return Object.keys(this.availableTypes[type]);
            case 2:
                const firstType = this.getJump(0).getType();
                const secondType = this.getJump(1).getType();

                return this.availableTypes[firstType][secondType];
            default:
                return Object.keys(this.availableTypes);
        }
    }

    protected getJump(index: number = this.jumps.length - 1) {
        return this.jumps[index];
    }
}
