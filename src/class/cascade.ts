import { AbstractFCElement } from './abstract-element';
import { Jump } from './jump';
import { KeyValue } from '../interface/key-value';

type LastLevel = KeyValue<string[]>;
export type AvailableTypes = KeyValue<LastLevel>;


export class Cascade extends AbstractFCElement{

    static SECOND_JUMPS = {
        [Jump.TYPES.A]: [],
        [Jump.TYPES.T]: [Jump.TYPES.T, Jump.TYPES.LO],
        [Jump.TYPES.LO]: [Jump.TYPES.T, Jump.TYPES.LO],
        [Jump.TYPES.EU]: [Jump.TYPES.S, Jump.TYPES.F]
    }

    static AVAILABLE_TYPES: AvailableTypes = {
        [Jump.TYPES.A]: Cascade.SECOND_JUMPS,
        [Jump.TYPES.T]: Cascade.SECOND_JUMPS,
        [Jump.TYPES.S]: Cascade.SECOND_JUMPS,
        [Jump.TYPES.LO]: Cascade.SECOND_JUMPS,
        [Jump.TYPES.F]: Cascade.SECOND_JUMPS,
        [Jump.TYPES.LZ]: Cascade.SECOND_JUMPS,
    };

    jumps: Jump[] = [];
    availableTypes: AvailableTypes = {};

    constructor(data: KeyValue<number>, availableTypes?: AvailableTypes) {
        super(data);

        this.availableTypes = availableTypes || Cascade.AVAILABLE_TYPES;
    }

    getKey() {
        return this.jumps
            .map((jump) => jump.getKey())
            .join('+');
    }

    getValue() {
        return this.jumps
            .reduce((res, jump) => {
                return res + jump.getValue();
            }, 0);
    }

    addJump(): Jump {
        if (this.jumps.length > 2) {
            throw Error('Too much jumps');
        }
        const newJump = new Jump(this.data);

        newJump.setTypeFilter(this.getNextTypes());

        this.jumps.push(newJump);

        return newJump;
    }

    removeLastJump(): Jump | undefined {
        return this.jumps.pop();
    }

    haveNextJump(): boolean {
        const nextTypes = this.getNextTypes();

        return nextTypes.length > 0;
    }

    protected getNextTypes(): string[] {
        switch (this.jumps.length) {
            case 0:
                return Object.keys(this.availableTypes);
            case 1:
                const type = this.getJump().getType();

                return Object.keys(this.availableTypes[type]);
            case 2:
                const firstType = this.getJump(0).getType();
                const secondType = this.getJump(1).getType();

                return this.availableTypes[firstType][secondType];
            default:
                return [];
        }
    }

    protected getJump(index: number = this.jumps.length - 1) {
        return this.jumps[index];
    }
}
