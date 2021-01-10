import { UserPayload } from './types/request';
declare global {
    namespace Express{
        interface Request {
            currentUser?: UserPayload;
        }
    }
}

export * from './errors/AppError';
export * from './errors/DatabaseError';
export * from './errors/ICommonErrorResponse';
export * from './errors/InvalidJsonError';
export * from './errors/JwtSecretNotDefinedError';
export * from './errors/NotAuthorizedError';
export * from './errors/NotFoundError';
export * from './errors/RequestValidationError';
export * from './errors/UserAlreadyExistsError';
export * from './errors/WrongCredentialsProvidedError';

export * from './middlerwares/auth';
export * from './middlerwares/currentuser';
export * from './middlerwares/errors';
export * from './middlerwares/requestValidation';

export * from './types/request';