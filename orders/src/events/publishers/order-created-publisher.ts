import { Publisher, OrderCreatedEvent, Subjects } from '@neat-it/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
