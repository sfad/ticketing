import { Publisher, Subjects, TicketUpdatedEvent } from '@neat-it/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
