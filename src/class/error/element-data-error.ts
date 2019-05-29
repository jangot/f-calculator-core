export class ElementDataError extends Error {
    constructor(key: string) {
        super(`There is no the key data: ${key}`);
    }
}
