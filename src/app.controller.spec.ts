// import { Test, TestingModule } from '@nestjs/testing';
// import { PaymentController } from './app.controller';
// import { PaymentService } from './app.service';

// describe('PaymentController', () => {
//   let paymentController: PaymentController;
//   let paymentService: PaymentService;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       controllers: [PaymentController],
//       providers: [
//         {
//           provide: PaymentService,
//           useValue: {
//             createPaymentIntentWithStripeLibrary: jest.fn(),
//           },
//         },
//       ],
//     }).compile();

//     paymentController = module.get<PaymentController>(PaymentController);
//     paymentService = module.get<PaymentService>(PaymentService);
//   });

//   describe('createIntent', () => {
//     it('should return a payment intent object', async () => {
//       // 模拟 PaymentService 中的 createPaymentIntentWithStripeLibrary 方法
//       const result = { id: 'pi_123', amount: 1000, currency: 'usd' };
//       jest.spyOn(paymentService, 'createPaymentIntentWithStripeLibrary').mockResolvedValue(result);

//       // 假设的请求参数
//       const mockRequest = { amount: 1000, currency: 'usd', paymentMethodTypes: ['card'], receiptEmail: 'test@example.com' };

//       expect(await paymentController.createIntent(mockRequest)).toBe(result);
//     });
//   });
// });
