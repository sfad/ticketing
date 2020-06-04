import { Subjects, Publisher, OrderCancelledEvent } from '@neat-it/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
