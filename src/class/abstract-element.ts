import { ElementGettingFieldError} from './error/element-getting-field-error';
import { ElementSettingFieldError} from './error/element-setting-field-error';
import { ElementDataError} from './error/element-data-error';
import FCElement from '../interface/element';
import { KeyValue } from '../interface/key-value';

export class AbstractFCElement implements FCElement {
    ['constructor']: typeof AbstractFCElement;

    static TYPES: KeyValue<string> = {
        ABSTRACT_TYPE: 'abstractType'
    };

    data: KeyValue<number> = {};
    type = '';

    constructor(data: KeyValue<number>) {
        this.data = data;
    }

    setType(type: string) {
        if (!this.checkValueInList<string>(this.constructor.TYPES, type)) {
            this.throwSettingsFieldError<string>(type, this.constructor.TYPES);
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

        if (this.data[key] === undefined) {
            throw new ElementDataError(key);
        }
        return this.data[key];
    }

    protected checkValueInList<T>(list: KeyValue<T>, value: T) {
        for (let key in list) {
            if (list[key] === value) {
                return true;
            }
        }

        return false;
    }

    protected throwGettingFieldError (type: string) {
        throw new ElementGettingFieldError(type);
    }

    protected throwSettingsFieldError<T> (value: string, keyValue: KeyValue<T>) {
        const list: T[] = [];
        for (let key in keyValue) {
            list.push(keyValue[key]);
        }

        throw new ElementSettingFieldError<T>(value, list);
    }
}
