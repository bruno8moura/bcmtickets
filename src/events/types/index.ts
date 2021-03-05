export enum OrderStatus {
    // When the order has been created, but the
    // ticket it is trying to order has not been reserved
    Created = 'created',

    // 1. The ticket order it trying to reserve has already been reserved or;
    // 2. The user has cancelled the order or;
    // 3. The order expires before payment

    Cancelled = 'cancelled',

    // The order has successfully reserved the ticket
    AwaitingPayment = 'awaiting:payment',

    // The order has reserved the ticket and the user has provided payment successfully
    Complete = 'complete',


}

export function getOrderStatus(status: string): OrderStatus | undefined {
    if(status === OrderStatus.Created) return OrderStatus.Created;
    if(status === OrderStatus.AwaitingPayment) return OrderStatus.AwaitingPayment;
    if(status === OrderStatus.Cancelled) return OrderStatus.Cancelled;
    if(status === OrderStatus.Complete) return OrderStatus.Complete;

    return undefined;
}