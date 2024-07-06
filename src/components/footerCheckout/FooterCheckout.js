import { Button } from 'antd'
import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { RightOutlined } from '@ant-design/icons'

const FooterCheckout = ({ cartItems }) => {
  let count=0;
  const itemCount = cartItems.forEach(item => {
    count += item?.quantity;
  });

  return (
    <div className='footer-container' >
      <div className='button-wrapper'>

        <div className='checkout-items'>
          {count} Items added
        </div>
        <div className='cart-redirect-button' >
          <Link to="/cart" >
            Go to cart <RightOutlined style={{ width: '14px', height: '14px', color: 'white' }} />
          </Link>
        </div>
      </div>

    </div>
  )
}

export default FooterCheckout
