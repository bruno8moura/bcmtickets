import { AppError } from "./AppError";
import { ErrorType, ICommonErrorResponse } from "./ICommonErrorResponse";
export class BadRequestError extends AppError {
    statusCode = 400;
    private readonly messages: string[];
    private readonly status: ErrorType;

    constructor(public message: string) {
      super(message);
  
      Object.setPrototypeOf(this, BadRequestError.prototype);

      this.messages = [message];
      this.status = 'client.error';
    }
  
    serializedError(): ICommonErrorResponse {
        return {
            statusError: this.status,
            messages: this.messages
        }
    }  
}