import { Controller, Post, Body, Logger } from '@nestjs/common';
import { PaymentService } from './app.service';

@Controller('payments')
export class PaymentController {
    private readonly logger = new Logger(PaymentController.name);

    constructor(private readonly paymentService: PaymentService) {}

    @Post('create-intent')
    async createIntent(@Body() body: { amount: number; currency: string}) {
        this.logger.log(`Received create payment intent request: ${JSON.stringify(body)}`);

        // 从请求体中提取所需参数
        const { amount, currency } = body;

        try {
            // 调用服务中的方法创建支付意图
            const paymentIntent = await this.paymentService.createPaymentIntentWithAxios(amount, currency);
            
            this.logger.log(`Payment intent created: ${JSON.stringify(paymentIntent)}`);
            return paymentIntent;
        } catch (error) {
            this.logger.error(`Error creating payment intent: ${error.message}`);
            throw error; // 或者返回一个错误响应
        }
    }
}




