import { AppError } from "./AppError";
import { ICommonErrorResponse } from "./ICommonErrorResponse";

export class NotFoundError extends AppError {
    statusCode = 404;
    
    constructor(){
        super('Route not found');

        Object.setPrototypeOf(this, NotFoundError.prototype);
    }

    serializedError(): ICommonErrorResponse {
        return {
            messages: ['Not found'],
            statusError: 'client.error'
        }
    }
    
}
