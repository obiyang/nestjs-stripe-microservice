// payment.module.ts 或 app.module.ts
import { Module } from '@nestjs/common';
import { PaymentService } from './app.service';
import { PaymentController } from './app.controller';

@Module({
  controllers: [PaymentController],
  providers: [PaymentService],
})
export class PaymentModule {}

