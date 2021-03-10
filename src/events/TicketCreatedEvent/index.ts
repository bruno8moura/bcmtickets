import { TicketDTO } from '../dtos/TicketDTO';
import { Subjects } from '../Subjects';
import { Event } from '../TemplateEvent';

/**
 * This module exists to do the coupling with the two types of data: Subject and Ticket
 */

export interface TicketCreatedEvent extends Event{
    subject: Subjects.TicketCreated;
    data: TicketDTO;
}