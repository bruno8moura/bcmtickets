import { Subjects } from '../Subjects';
import { Event } from '../TemplateEvent';

/**
 * This module exists to do the coupling with the two types of data: Subject and Payment
 */

export interface PaymentCreatedEvent extends Event{
    subject: Subjects.PaymentCreated;
    data: {
        id: string;
        orderId: string;
        thridPartyPaymentId: string;
    };
}