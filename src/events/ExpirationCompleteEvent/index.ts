import { TicketDTO } from '../dtos/TicketDTO';
import { Subjects } from '../Subjects';
import { Event } from '../TemplateEvent';

/**
 * This module exists to do the coupling with the two types of data: Subject and Ticket
 */

export interface ExpirationCompleteEvent extends Event{
    subject: Subjects.ExpirationComplete;
    data: {
        orderId: string;
    };
}