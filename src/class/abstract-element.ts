import { ValuesType } from '../../listofvalue';
import { ElementGettingFieldError} from './error/element-getting-field-error';
import { ElementSettingFieldError} from './error/element-setting-field-error';
import { ElementDataError} from './error/element-data-error';
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
            this.throwSettingsFieldError(type, this.constructor.TYPES);
        }
        this.type = type;

        return this;
    }

    getKey() {
        if (!this.type) {
            this.throwGettingFieldError('type');
        }
        return this.type;
    }

    getValue() {
        const key = this.getKey();

        if (!this.data[key]) {
            throw new ElementDataError(key);
        }
        return this.data[key];
    }

    protected throwGettingFieldError (type: string) {
        throw new ElementGettingFieldError(type);
    }

    protected throwSettingsFieldError (value: string, list: string[]) {
        throw new ElementSettingFieldError(value, list);
    }
}
