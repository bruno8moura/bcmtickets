import { OrderStatus } from "../types";
import { TicketDTO } from "./TicketDTO";

export interface OrderDTO {
    id: string;
    status: OrderStatus;
    userId: string;
    expiresAt: string;
    version: number;
    ticket: TicketDTO;
}