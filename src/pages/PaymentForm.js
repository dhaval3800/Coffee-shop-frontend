import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Button, Form, message } from 'antd';
import api from '../utils/api';
import { useSelector } from 'react-redux';
import { selectAuth } from '../redux/features/auth/authSlice';
import { selectCartTotal } from '../redux/features/cart/cartSlice';

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const { user } = useSelector(selectAuth)
    const amount = useSelector(selectCartTotal)

    const handleSubmit = async () => {

        if (!stripe || !elements) {
            return;
        }

        setLoading(true);

        const { clientSecret } = await api.post('create-payment-intent', { amount: amount * 100 });
        console.log("🚀 ~ file: PaymentForm.js:41 ~ handleSubmit ~ clientSecret:", clientSecret)

        const paymentResult = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: user?.name ? user.name : 'Test User',
                },
            },
        });

        setLoading(false);
        if (paymentResult.error) {
            message.error('Payment failed. Please try again.');
        } else {
            if (paymentResult.paymentIntent.status === 'succeeded') {
                message.success('Payment successful!');
            }

        }
    }

    return (
        <Form onFinish={handleSubmit}>
            <Form.Item>
                <CardElement options={{ hidePostalCode: true }} />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" loading={loading} disabled={!stripe}>
                    Pay
                </Button>
            </Form.Item>
        </Form>
    );
}

export default PaymentForm;