import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Button, Form, message } from 'antd';
import api from '../../utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from '../../redux/features/auth/authSlice';
import { resetCart, selectCartItems, selectCartTotal } from '../../redux/features/cart/cartSlice';

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const items = useSelector(selectCartItems);
    const total = useSelector(selectCartTotal);
    const dispatch = useDispatch();

    const handleSubmit = async () => {
        if (!stripe || !elements) {
            return;
        }
        setLoading(true);
        const body = {
            products: items
        };
        try {
            const session = await api.post('create-checkout-session', body);
            const result = await stripe.redirectToCheckout({
                sessionId: session.id
            });
            if (result.error) {
                message.error('Payment failed. Please try again.');
            } else {
                dispatch(resetCart());
                message.success('Payment successful!');
            }
        } catch (error) {
            message.error('Payment failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };
    return (
        <Form onFinish={handleSubmit}>
        {items.length === 0 ? (
            <div>Your cart is empty. Please add some items to your cart before proceeding to checkout.</div>
        ) : (
            <Form.Item>
                <Button style={{ padding: '20px' }} type="primary" htmlType="submit" loading={loading} disabled={!stripe}>
                    Pay ₹{total.toFixed(2)}
                </Button>
            </Form.Item>
        )}
    </Form>
    );
}
export default PaymentForm;