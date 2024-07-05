import React from 'react';
import './style.css'
import { PlusOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cart/cartSlice';

const ProductCard = (props) => {
    const { image, category, name, price, description } = props.product;
    const product = props.product
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart({ product }));
    };

    return (
        <div className="product-card">
            <div className='product-content'>
                <div style={{ paddingRight: '28px' }}>
                    <img className='product-img' src={image} height={'190px'} alt={'name'} />
                </div>
                <div className="product-details">
                    <div style={{ fontWeight: '700', fontSize: '16px', paddingBottom: '8px' }}>{name} </div>
                    <div style={{ fontWeight: '400', fontSize: '14px', paddingBottom: '14px', color: '#003B40' }}>
                        {description}
                    </div>
                    <div style={{ fontWeight: '600', fontSize: '14px', color: '#003B40' }}>{price}</div>
                </div>
            </div>
            <div className='product-add-btn' onClick={handleAddToCart}>
                <PlusOutlined style={{ color: 'white' }} />
            </div>
        </div>
    );
};

export default ProductCard;
