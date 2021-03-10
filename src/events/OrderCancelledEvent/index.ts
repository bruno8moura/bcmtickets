import { OrderDTO } from '../dtos/OrderDTO';
import { Subjects } from '../Subjects';
import { Event } from '../TemplateEvent';

/**
 * This module exists to do the coupling with the two types of data: Subject and OrderDTO
 */

export interface OrderCancelledEvent extends Event{
    subject: Subjects.OrderCancelled;
    data: OrderDTO;
}