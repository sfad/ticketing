import { Subjects, Publisher, PaymentCreatedEvent } from '@neat-it/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
