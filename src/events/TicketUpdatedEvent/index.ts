import { TicketDTO } from '../dtos/TicketDTO';
import { Subjects } from '../Subjects';

/**
 * This module exists to do the coupling with the two types of data: Subject and Ticket
 */

export interface TicketUpdatedEvent {
    subject: Subjects.TicketUpdated;
    data: TicketDTO;
}