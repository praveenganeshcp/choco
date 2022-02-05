export class Params {
    private value: any;

    constructor(value: any) {
        this.value = value;
    }

    getValue(key: string, type: Function = String): string | undefined {
        const value = this.value[key];
        return value ? type(value) : undefined;
    }
}