import { expect } from 'chai';
import map from 'lodash/map';
import { values } from '../../data/listofvalue';
import { Jump } from '../jump';

describe('Jump', () => {
    const typesList = map(Jump.TYPES, (value: string) => value);
    const turnsList = map(Jump.TURNS, (value: string) => value);
    const notFullSpins = map(Jump.NOT_FULL_SPINS, (value: string) => value);

    for (let type of typesList) {
        for (let turns of turnsList) {
            for (let notFullSpin of notFullSpins) {
                const el = new Jump(values);

                el
                    .setType(type)
                    .setNotFullSpin(notFullSpin)
                    .setTurns(turns);
                it(`should have key "${el.getKey()}" in data`, () => {
                    const value = el.getValue() !== undefined;

                    expect(value).to.equal(true);
                });

                if (Jump.HAS_ARRIS[type]) {
                    const el = new Jump(values);

                    el
                        .setType(type)
                        .setNotFullSpin(notFullSpin)
                        .setTurns(turns)
                        .setArris();

                    it(`should have key "${el.getKey()}" in data`, () => {

                        const value = el.getValue() !== undefined;

                        expect(value).to.equal(true);
                    });
                }
            }
        }
    }

});
