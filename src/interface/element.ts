
export type FCElementCallback = (e: FCElement) => FCElement;

export interface FCElement {
    getKey: () => string;
    getValue: () => number;
    onChange: (name: string, cb: FCElementCallback) => number;
    removeEvent: (name: string, index: number) => FCElement;
}
