import React from 'react';
import './style.css'
import { PlusOutlined } from '@ant-design/icons';

const ProductCard = (props) => {
console.log("🚀 ~ file: ProductCard.js:6 ~ ProductCard ~ props:", props)
    const {image, category, name, price} = props.product;
    return (
        <div class="product-card">
            <div class='product-content'>
                <div style={{ paddingRight: '28px' }}>
                    <img class='product-img' src={image} height={'190px'} alt={'name'} />
                </div>
                <div class="product-details">
                    <div style={{ fontWeight: '700', fontSize: '16px', paddingBottom: '8px' }}>{name}</div>
                    <div style={{ fontWeight: '400', fontSize: '14px', paddingBottom: '14px', color: '#003B40' }}>
                        {'A chocolate-flavored warm beverage that is a variant of a café latte'}
                    </div>
                    <div style={{ fontWeight: '600', fontSize: '14px', color: '#003B40' }}>{price}</div>
                </div>
            </div>
            <div class='product-add-btn'>
                <PlusOutlined style={{ color: 'white' }} />
            </div>
        </div>
    );
};

export default ProductCard;
