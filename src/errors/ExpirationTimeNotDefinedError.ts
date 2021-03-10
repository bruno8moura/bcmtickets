import { AppError } from './AppError';
import { ICommonErrorResponse, ErrorType } from './ICommonErrorResponse';

export class ExpirationTimeNotDefinedError extends AppError{
    statusCode = 500;
    private readonly messages: string[];
    private readonly status: ErrorType;

    constructor() {
        super('Expiration time not defined. Env variable "EXPIRATION_WINDOW_SECONDS" not found.');

        // Only because we are extending a built in class
        Object.setPrototypeOf(this, ExpirationTimeNotDefinedError.prototype);

        this.messages = ['Expiration time must be defined in order to create an Order object.'];
        this.status = 'server.error';
    }

    serializedError(): ICommonErrorResponse {
        return {
            statusError: this.status,
            messages: this.messages
        }
    }
}