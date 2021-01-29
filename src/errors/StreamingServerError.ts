import { AppError } from "./AppError";
import { ICommonErrorResponse, ErrorType } from "./ICommonErrorResponse";

export class StreamingServerError extends AppError {
    statusCode = 500;
    private readonly messages: string[];
    private readonly status: ErrorType;

    constructor(message: string){
        super('Streaming Server error connection');
        // Only because we are extending a built in class
        Object.setPrototypeOf(this, StreamingServerError.prototype);

        this.messages = [message];
        this.status = 'server.error';
    }

    serializedError(): ICommonErrorResponse {
        return {
            statusError: this.status,
            messages: this.messages
        }
    }
}