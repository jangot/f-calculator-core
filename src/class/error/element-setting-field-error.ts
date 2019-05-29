export class ElementSettingFieldError extends Error {
    constructor(value: string, list: string[]) {
        const availableValues = list.join(',');
        super(`Value "${value}" is not exist in ${availableValues}`);
    }
}
