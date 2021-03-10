import { OrderDTO } from '../dtos/OrderDTO';
import { Subjects } from '../Subjects';
import { Event } from '../TemplateEvent';

/**
 * This module exists to do the coupling with the two types of data: Subject and Ticket
 */

export interface OrderCreatedEvent extends Event{
    subject: Subjects.OrderCreated;
    data: OrderDTO;
}