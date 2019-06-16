import { expect } from 'chai';
import map from 'lodash/map';
import values from 'lodash/values';
import { values as data } from '../../data/listofvalue';
import { Jump } from '../jump';

describe('Jump data', () => {
    const typesList = map(Jump.TYPES, (value: string) => value);
    const notFullSpins = map(Jump.NOT_FULL_SPINS, (value: string) => value);

    for (let type of typesList) {
        const el = new Jump(data);
        el.setType(type);

        const turnsList = el.getAvailableTurns();
        for (let turns of turnsList) {
            for (let notFullSpin of notFullSpins) {
                el
                    .setNotFullSpin(notFullSpin)
                    .setTurns(turns);
                it(`should have key "${el.getKey()}" in data`, () => {
                    const value = el.getValue() !== undefined;

                    expect(value).to.equal(true);
                });

                if (Jump.HAS_ARRIS[type]) {
                    const el = new Jump(data);

                    el
                        .setType(type)
                        .setNotFullSpin(notFullSpin)
                        .setTurns(turns)
                        .setArris();

                    // TEST HERE
                    it(`should have key "${el.getKey()}" in data`, () => {

                        const value = el.getValue() !== undefined;

                        expect(value).to.equal(true);
                    });
                }
            }
        }
    }
});

describe('Jump filter', () => {
    it('should have all types without filter', () => {
        const jump = new Jump(data);

        const expectTypes = values(Jump.TYPES);

        expect(expectTypes).to.eql(jump.getAvailableTypes());
    });

    [
        [Jump.TYPES.T],
        [Jump.TYPES.T, Jump.TYPES.LZ],
        [Jump.TYPES.T, Jump.TYPES.S, Jump.TYPES.F]
    ].forEach((filter) => {

        it(`should have part of types with filter: ${filter}`, () => {
            const jump = new Jump(data);

            jump.setTypeFilter(filter);

            expect(filter).to.eql(jump.getAvailableTypes());
        });
    });

    it('should have part of types after change filter', () => {
        const jump = new Jump(data);

        const filter = [Jump.TYPES.S, Jump.TYPES.F];

        jump.setTypeFilter([Jump.TYPES.T]);
        jump.setTypeFilter(filter);

        expect(filter).to.eql(jump.getAvailableTypes());
    });
});
