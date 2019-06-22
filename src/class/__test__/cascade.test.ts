import { expect } from 'chai';
// import values from 'lodash/values';
import { values as data } from '../../data/new-date';
import { Cascade } from '../cascade';
import { Jump } from '../jump';

function twoJumps(cb: (a: Jump, b: Jump, c: Cascade) => void) {
    const cascade = new Cascade(data);
    const firstJump = cascade.addJump();
    firstJump.getAvailableTypes().forEach((firstType) => {
        firstJump.setType(firstType);
        const secondJump = cascade.addJump();

        secondJump.getAvailableTypes().forEach((secondType) => {
            secondJump.setType(secondType);
            cb(firstJump, secondJump, cascade);
        });

        cascade.removeLastJump();
    });
}

function twoJumpsWithTurns(cb: (a: Jump, b: Jump, cascade: Cascade) => void) {
    twoJumps((firstJump: Jump, secondJump: Jump, cascade: Cascade) => {
        const firstTurns = firstJump.getAvailableTurns();
        const secondTurns = secondJump.getAvailableTurns();

        firstTurns.forEach((firstCount) => {
            firstJump.setTurns(firstCount);
            secondTurns.forEach((secondCount) => {
                secondJump.setTurns(secondCount);

                cb(firstJump, secondJump, cascade);
            });
        });
    });
}

describe.only('Cascade', () => {
    it('first jump should have all available types', () => {
        const cascade = new Cascade(data, {});

        const jumpTypes = cascade.addJump().getAvailableTypes();

        const expectJump = new Jump(data).getAvailableTypes();

        expect(expectJump).to.eql(jumpTypes);
    });

    it(`Two jumps have values`, () => {
        twoJumpsWithTurns((firstJump: Jump, secondJump: Jump, cascade: Cascade) => {
            firstJump.getAvailableNotFullSpin().forEach((firstNotFullSpin) => {
                firstJump.setNotFullSpin(firstNotFullSpin);

                secondJump.getAvailableNotFullSpin().forEach((secondNotFullSpin) => {
                    secondJump.setNotFullSpin(secondNotFullSpin);

                    const value = cascade.getValue() !== undefined;

                    expect(value).to.equal(true);
                });
            });
        });
    });
});
