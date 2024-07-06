import { Spin } from 'antd'
import React from 'react'
import './spinner.css'

const Spinner = ({size="large"}) => {
  return (
    <div className='spin-container'>
      <Spin size={size} />;
    </div>
  )
}

export default Spinner
