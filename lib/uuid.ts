import * as uuid from 'uuid';

export class UUID {
    private str: string;

    constructor(str?: string) {
        this.str = str || uuid.v4();
    }

    toString() {
        return this.str;
    }

    static fromString(str: string) {
        if (!str) {
            throw new Error('Unable to create UUID from null value');
        }

        return new UUID(str);
    }
}
