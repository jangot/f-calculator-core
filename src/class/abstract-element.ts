import { values } from '../../listofvalue';

import FCElement from '../interface/element';

export class AbstractFCElement implements FCElement {
    type = '';

    constructor(type: string) {
        this.type = type;
    }

    getKey() {
        return this.type;
    }

    getValue() {
        const key = this.getKey();

        if (!values[key]) {
            throw Error(`There is no "${key}" in the values`);
        }
        return values[key];
    }
}
