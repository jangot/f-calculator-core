export class ElementGettingFieldError extends Error {
    constructor(type: string) {
        super(`Field "${type}" is required`);
    }
}
