import { ValuesType } from '../../listofvalue';
import FCElement from '../interface/element';

export class AbstractFCElement implements FCElement {
    ['constructor']: typeof AbstractFCElement;

    static TYPES: string[] = ['abstractType'];

    data: ValuesType = {};
    type = '';

    constructor(data: ValuesType) {
        this.data = data;
    }

    setType(type: string) {
        if (this.constructor.TYPES.indexOf(type) === -1) {
            throw Error('There is not the type');
        }
        this.type = type;

        return this;
    }

    getKey() {
        return this.type;
    }

    getValue() {
        const key = this.getKey();

        if (!this.data[key]) {
            throw Error(`There is no "${key}" in the values`);
        }
        return this.data[key];
    }
}
