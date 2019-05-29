export class ElementSettingFieldError<T> extends Error {
    constructor(value: string, list: T[]) {
        const availableValues = list.join(',');
        super(`Value "${value}" is not exist in ${availableValues}`);
    }
}
