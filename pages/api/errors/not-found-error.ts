export class NotFoundError implements Error {
    name = 'NotFoundError';
    message: string;

    constructor(message?: string) {
        this.message = message || 'Not found';
    }
}
