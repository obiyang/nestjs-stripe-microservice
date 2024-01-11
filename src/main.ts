import { NestFactory } from '@nestjs/core';
import { PaymentModule } from './app.module'; // 确保路径正确
import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
  try {
    const app = await NestFactory.create(PaymentModule);
    // 监听所有网络接口，使用 App Engine 分配的端口
    await app.listen(process.env.PORT || 3000, '0.0.0.0');
    console.log(`Application is running on: ${await app.getUrl()}`);
  } catch (error) {
    console.error('Error during Nest application startup', error);
  }
}
bootstrap();


