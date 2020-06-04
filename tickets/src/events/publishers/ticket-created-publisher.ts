import { Publisher, Subjects, TicketCreatedEvent } from '@neat-it/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
