import { ICommonErrorResponse } from "./ICommonErrorResponse";

export abstract class AppError extends Error {
    abstract statusCode: number;

    constructor(message: string){
        super(message);

        // Only because we are extending a built in class
        Object.setPrototypeOf(this, AppError.prototype);
    }

    abstract serializedError(): ICommonErrorResponse;
}

