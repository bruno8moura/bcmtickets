export type ErrorType = 'client.error' | 'server.error';

export interface ICommonErrorResponse {
    statusError: ErrorType;
    messages: string[];    
}