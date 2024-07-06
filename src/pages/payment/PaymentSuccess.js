import React, { useEffect } from 'react'
import './paymentSuccess.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { resetCart } from '../../redux/features/cart/cartSlice'

const PaymentSuccess = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(resetCart())
    }, [])

    return (
        <div className="container">
            <div className="content">
                <h1 className="success-message">Payment Successful!</h1>
                <p className="message">Thank you for your purchase.</p>
                <Link to="/" className="button">
                    Continue Shopping
                </Link>
            </div>
        </div>
    )
}

export default PaymentSuccess
