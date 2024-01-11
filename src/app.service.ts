import { Injectable } from '@nestjs/common';
import axios from 'axios';
import Stripe from 'stripe';
const querystring = require('querystring'); // Node.js 的内置模块用于格式化数据

@Injectable()
export class PaymentService {
    private stripe: Stripe;

    constructor() {
        // 初始化 Stripe
        this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
            apiVersion: '2023-10-16',
        });
    }

    // 使用 Stripe Node.js 库创建支付意图
    async createPaymentIntentWithStripeLibrary(amount: number, currency: string, paymentMethodTypes: string[], receiptEmail: string): Promise<Stripe.PaymentIntent> {
        try {
            const paymentIntent = await this.stripe.paymentIntents.create({
                amount: amount, // 金额
                currency: currency, // 货币类型
                payment_method_types: paymentMethodTypes, // 支付方式
                receipt_email: receiptEmail, // 收据邮件地址
            });

            return paymentIntent;
        } catch (error) {
            throw new Error(`Payment Intent creation failed: ${error.message}`);
        }
    }

    // 使用 axios 直接与 Stripe REST API 交互创建支付意图
    async createPaymentIntentWithAxios(amount: number, currency: string): Promise<any> {
        const headers = {
            'Authorization': `Bearer ${process.env.STRIPE_SECRET_KEY}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        };
    
        const postData = querystring.stringify({
            amount: amount,
            currency: currency,
        });
    
        try {
            const response = await axios.post('https://api.stripe.com/v1/payment_intents', postData, { headers });
            return response.data;
        } catch (error) {
            throw new Error(`Payment Intent creation failed: ${error.response.data.error.message}`);
        }
    }
}


